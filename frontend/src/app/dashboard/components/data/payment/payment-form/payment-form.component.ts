import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OperationStatus } from '../../../../constants/status.enum';
import { Page } from '../../../../dto/page.dto';
import { AppResponse } from '../../../../dto/response.dto';
import { Order } from '../../../../model/data/order-model';
import { Payment } from '../../../../model/data/payment-model';
import { CrudService } from '../../../../services/crud.service';
import { NotificationUtil } from '../../../../utils/notification.util';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  formGroup!: FormGroup;


  controls: any = {
  "order": new FormControl('', []),
  "amount": new FormControl('', []),
  "paymentDate": new FormControl('', []),
  "paymentMethod": new FormControl('', [])
  };
  submitted = false;
  endPoint = "payment";
  data: any = {};
  orders: Order[] = [];

  constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.formGroup.controls, this.data);
    }

    this.service.getList('order', 0, 999999999).subscribe((res: AppResponse) =>{
      const page: Page = res.data;
      this.orders = page.content;
    })

  }

  createForm() {
    this.formGroup = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values: Payment = { 
      ...this.data, 
      ...this.formGroup.value, 
      order: {id: this.formGroup.value.order}
    };
    this.service.save(values, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
      this.noticeUtil.showResponseMessage(response);
    },
    (error: Error) => {
      const res = {status: OperationStatus.FAILURE, message: "Server error! Please contact with support team."};
      this.noticeUtil.showResponseMessage(res);
      console.log(this.endPoint, error);
    });
  }
}
