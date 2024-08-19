
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../all-service/payment.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { OrderService } from '../all-service/checkout.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterModule, RouterLink],
  providers: [OrderService],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
    private r: Router
  ) {
    this.paymentForm = this.fb.group({
      holdername: ['', Validators.required],
      cardno: ['', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]],
      cvcpwd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      amount: ['', Validators.required],
      paymentDate: [''],
      expirDate: ['']
    });
  }

  onSubmit() {
    const order = sessionStorage.getItem('order');
    if (order) {
      const orderdata = JSON.parse(order);
      orderdata['payment'] = this.paymentForm.value;
      this.orderService.postData(orderdata).subscribe((res) => { console.log(res); });
      this.r.navigate(['success']);
    }
  }

}

