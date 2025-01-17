
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from '../../../../../app.service';
import { CrudService } from '../../../../services/crud.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [CrudService, AppService, HttpClientModule]
})

  export class ProductListComponent {

  products: any[] = [];
  

  constructor(
    private appService: AppService) { }


  
  ngOnInit(): void {
    this.appService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      console.log(this.products);
    });
}


delecteProduct(id: number) {
  this.appService.deleteProduct(id).subscribe((res) => {
    console.log(res);
    this.ngOnInit();

  });
}


}








// Base code of woner
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CrudService } from '../../../../services/crud.service';
// import { AppResponse } from '../../../../dto/response.dto';
// import { Product } from '../../../../model/config/product-model';


// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.scss']
// })
// export class ProductListComponent implements OnInit {

//   displayedColumns: string[] = ['name','description','price','quantityInStock','supplier','category','actions'];
//   dataSource: Product[] = [];

//   constructor(private service: CrudService, private router: Router) { }

//   ngOnInit(): void {
//     this.service.getList('product').subscribe((res: AppResponse) => {
//       this.dataSource = res.data.content
//     }
//     );
//   }

  
//   delete(index: number) {
//     let id = this.dataSource[index].id as number;
//     this.service.delete(id, "product").subscribe(() => {
//       const newData = this.dataSource.filter((s, i) => i != index);
//       this.dataSource = newData;
//     })
//   }

//   edit(index: number) {
//     this.service.data = { ...this.dataSource[index] };
//     this.router.navigate(['/product-form']);
//   }

// }
