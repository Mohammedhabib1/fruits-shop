import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../../../app.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [AppService,HttpClientModule],
  
})

export class ProductFormComponent {

  productForm: FormGroup;



  constructor(
    private routs: Router,
    private appService: AppService,
    
    private fb: FormBuilder ) {
        this.productForm = this.fb.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      quantity: [''],
      image: ['']
    });
     }

     onSubmit() {
      console.log(this.productForm.value);
      this.appService.postProduct(this.productForm.value).subscribe((res) => {console.log(res);});
    }


}




// Base co woner
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { OperationStatus } from '../../../../constants/status.enum';
// import { Page } from '../../../../dto/page.dto';
// import { AppResponse } from '../../../../dto/response.dto';
// import { Category } from '../../../../model/config/category-model';
// import { Product } from '../../../../model/config/product-model';
// import { Supplier } from '../../../../model/config/supplier-model';
// import { CrudService } from '../../../../services/crud.service';
// import { NotificationUtil } from '../../../../utils/notification.util';
// import { populateFormControl } from '../../../../utils/object.util';

// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.scss']
// })
// export class ProductFormComponent implements OnInit {

//   productForm: FormGroup = this.formBuilder.group({
//     name: [''],
//     description: [''],
//     price: [''],
//     quantityInStock: [''],
//     supplier: [''],
//     category: ['']
//   });
//   submitted = false;
//   endPoint = "product";
//   data: any = {}
//   suppliers: Supplier[] = [];
//   categories: Category[] = [];

//   constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

//   ngOnInit() {
//     this.createForm();
//     this.data = this.service.data;
//     if (this.data.id) {
//       populateFormControl(this.productForm.controls, this.data);
//     }

//     this.service.getList('supplier', 0, 999999999).subscribe((res: AppResponse) => {
//       const page: Page = res.data;
//       this.suppliers = page.content;
//     })

//     this.service.getList('category', 0, 999999999).subscribe((res: AppResponse) => {
//       const page: Page = res.data;
//       this.categories = page.content;
//     })


//   }

//   createForm() {
//     this.productForm = this.formBuilder.group(this.controls);
//   }
//   controls(controls: any): FormGroup<any> {
//     throw new Error('Method not implemented.');
//   }

//   submitForm() {
//     this.submitted = true;
//     if (this.productForm.invalid) {
//       return;
//     }
//     const values: Product = { 
//       ...this.data, 
//       ...this.productForm.value, 
//       supplier: {id: this.productForm.value.supplier},
//       category: {id: this.productForm.value.category},
//     };

   
//  this.service.save(values, this.endPoint).subscribe(response => {
//       this.productForm.reset();
//       this.submitted = false;
//       this.noticeUtil.showResponseMessage(response);
//     },
//       (error: Error) => {
//         const res = { status: OperationStatus.FAILURE, message: "Server error! Please contact with support team." };
//         this.noticeUtil.showResponseMessage(res);
//         console.log(this.endPoint, error);
//       });
   
//   }

// }
