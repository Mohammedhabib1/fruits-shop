import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../../../app.service';

@Component({
  selector: 'app-product-update',
  // standalone: true,
  // imports: [HttpClientModule, ReactiveFormsModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss',
  providers: [AppService]
})
export class ProductUpdateComponent {




  id: number = this.route.snapshot.params["id"];
  updateForm: any;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  onInit(): void {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      quantity: [''],
      image: ['']
    })
  }

  ngOnInit() {
    this.onInit();
    this.getProductById();
  }

  getProductById() {

    this.appService.getProductById(this.id).subscribe((res) => {

      console.log(res);
      this.updateForm.patchValue(res);
    });
  }


  updateProduct() {

    this.appService.updateProduct(this.id, this.updateForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.router.navigateByUrl('');
      }
    });
  }



}
