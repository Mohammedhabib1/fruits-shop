
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../all-service/payment.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterModule,RouterLink],
  providers: [PaymentService],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(
    private paymentService: PaymentService,
    private fb: FormBuilder,
    private r:Router
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
    console.log(this.paymentForm.value);
    this.paymentService.postData(this.paymentForm.value).subscribe((res) => {
      console.log(res);
    });
    this.r.navigate(['success']);
  }
}

