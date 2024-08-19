import { Component } from '@angular/core';
import { PaymentService } from '../../../../../all-service/payment.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
  providers: [PaymentService,HttpClientModule]
})
export class PaymentListComponent {

  payments: any[] = [];

  constructor(
    private paymentService: PaymentService,
    ) { }

  ngOnInit(): void {
    this.paymentService.getAllData().subscribe((res) => {
      this.payments = res.data;
      console.log(this.payments);
    });
  }

  delecteData(id: number) {
    this.paymentService.deleteData(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

}
