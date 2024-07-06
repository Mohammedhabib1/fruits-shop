import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Review } from '../../../../model/data/review-model';
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  displayedColumns: string[] = ['product','customer','rating','comment','actions'];
  dataSource: Review[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('review').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  
  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "review").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/review-form']);
  }
}
