
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderService } from '../../../../../all-service/checkout.service';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [OrderService, HttpClientModule]
})

export class OrderListComponent {

  orders: any[] = [];


  constructor(
    private orderService: OrderService) { }



  ngOnInit(): void {
    this.orderService.getAllData().subscribe((res) => {
      this.orders = res.data;
      console.log(this.orders);
    });
  }


  delecteData(id: number) {
    this.orderService.deleteData(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();

    });
  }

  deliver(order: any) {
    order.status = 'Delivered';
    this.orderService.postData(order).subscribe((res) => {
      alert('Order Delivered successfully');
    })
  }


}
