// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart-form',
//   templateUrl: './cart-form.component.html',
//   styleUrl: './cart-form.component.scss'
// })
// export class CartFormComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit {
  cartForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.fb.group({
      productName: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit(): void {
    if (this.cartForm.valid) {
      console.log('Form Submitted', this.cartForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

