import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationStatus } from '../../../../constants/status.enum';
import { Customer } from '../../../../model/config/customer-model';
import { CrudService } from '../../../../services/crud.service';
import { NotificationUtil } from '../../../../utils/notification.util';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    address: [''],
    city: [''],
    state: [''],
    postalCode: [''],
    country: ['']
  });

  submitted = false;
  endPoint = "customer";
  data: any = {};



  constructor(
    private formBuilder: FormBuilder, 
    private service: CrudService, 
    private noticeUtil: NotificationUtil) { }

  ngOnInit() {
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.customerForm.controls, this.data);
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    const values: Customer = {
      ...this.data,
      ...this.customerForm.value
    };
    this.service.save(values, this.endPoint).subscribe(response => {
      this.customerForm.reset();
      this.submitted = false;
      this.noticeUtil.showResponseMessage(response);
    },
      (error: Error) => {
        const res = { status: OperationStatus.FAILURE, message: "Server error! Please contact with support team." };
        this.noticeUtil.showResponseMessage(res);
        console.log(this.endPoint, error);
      });
  }
}
