
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CheckoutService } from '../../../../../all-service/checkout.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [CheckoutService,HttpClientModule]
})

  export class OrderListComponent {

  orders: any[] = [];
  

  constructor(
    private checkoutService: CheckoutService) { }


  
  ngOnInit(): void {
    this.checkoutService.getAllData().subscribe((res) => {
      this.orders = res.data;
      console.log(this.orders);
    });
}


delecteData(id: number) {
  this.checkoutService.deleteData(id).subscribe((res) => {
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












// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CrudService } from '../../../../services/crud.service';
// import { AppResponse } from '../../../../dto/response.dto';
// import { Order } from '../../../../model/data/order-model';

// @Component({
//   selector: 'app-order-list',
//   templateUrl: './order-list.component.html',
//   styleUrls: ['./order-list.component.scss']
// })
// export class OrderListComponent implements OnInit {

//   displayedColumns: string[] = ['customer','orderDate','totalAmount','actions'];
//   dataSource: Order[] = [];

//   constructor(private service: CrudService, private router: Router) { }

//   ngOnInit(): void {
//     this.service.getList('order').subscribe((res: AppResponse) => {
//       this.dataSource = res.data.content
//     }
//     );
//   }

  
//   delete(index: number) {
//     let id = this.dataSource[index].id as number;
//     this.service.delete(id, "order").subscribe(() => {
//       const newData = this.dataSource.filter((s, i) => i != index);
//       this.dataSource = newData;
//     })
//   }

//   edit(index: number) {
//     this.service.data = { ...this.dataSource[index] };
//     this.router.navigate(['/order-form']);
//   }

//   isPaymentDue(index: number){
//     this.service.data = { ...this.dataSource[index]};
//     this.router.navigate(['payment-form']);
//   }

//   payment(index: number){
//     // this.service.data = { ...this.dataSource[index]};
//     // this.router.navigate(['payment-form']);
//   }

// }
