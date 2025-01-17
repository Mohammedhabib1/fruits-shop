import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../services/crud.service';
import { AppResponse } from '../../../../dto/response.dto';
import { Category } from '../../../../model/config/category-model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['name','description','actions'];
  dataSource: Category[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('category').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  
  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "category").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/category-form']);
  }

}
