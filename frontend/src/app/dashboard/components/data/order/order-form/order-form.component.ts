import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OperationStatus } from '../../../../constants/status.enum';
import { Page } from '../../../../dto/page.dto';
import { AppResponse } from '../../../../dto/response.dto';
import { Customer } from '../../../../model/config/customer-model';
import { Order } from '../../../../model/data/order-model';
import { CrudService } from '../../../../services/crud.service';
import { NotificationUtil } from '../../../../utils/notification.util';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  formGroup!: FormGroup;


  controls: any = {
    "customer": new FormControl('', []),
    "orderDate": new FormControl('', []),
    "totalAmount": new FormControl('', [])
  };
  submitted = false;
  endPoint = "order";
  data: any = {};
  customers: Customer[] = [];

  constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.formGroup.controls, this.data);
    }

    this.service.getList('customer', 0, 999999999).subscribe((res: AppResponse) =>{
      const page: Page = res.data;
      this.customers = page.content;
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
    const values: Order = { ...this.data, 
      ...this.formGroup.value,
      customer: {id: this.formGroup.value.customer}
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
