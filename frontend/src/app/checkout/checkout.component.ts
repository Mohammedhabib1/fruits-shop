import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../app/footer/footer.component";
import { HeaderComponent } from '../../app/header/header.component';
import { CheckoutService } from '../all-service/checkout.service';
import { Product } from '../model/product.model';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartState } from '../ngrx/cart.reducer';
import { getCartSelector } from '../ngrx/cart.selector';

@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss',
    imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, ReactiveFormsModule, HttpClientModule],
    providers: [CheckoutService]
})
export class CheckoutComponent {

    checkoutForm: FormGroup;
    subTotal: number = 0;
    cartItems: Product[] = [];
    cartItems$!: Observable<Product[]>;
    shippingCharge: number = 0;





    constructor(
        private cartStore: Store<CartState>,
        // private routs: Router,
        private checkoutService: CheckoutService,
        private fb: FormBuilder,) {
        this.checkoutForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            comment: ['']
        });
        localStorage.setItem('total', this.subTotal.toString());
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        this.checkoutForm.patchValue({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            comment: user.comment
        });


    }

    onSubmit() {
        console.log(this.checkoutForm.value);
        this.checkoutService.postData(this.checkoutForm.value).subscribe((res) => { console.log(res); });
    }




    ngOnInit(): void {
        this.cartItems$ = this.cartStore.pipe(
            select(getCartSelector),
            map(cartState => Object.values(cartState))
        );
        this.cartItems$.subscribe(items => {
            this.cartItems = items;
            for (let item = 0; item < items.length; item++) {
                this.subTotal += items[item].price * items[item].quantity;
                this.shippingCharge = 50;
                if (item >= 4) {
                    this.shippingCharge = 100
                }
                console.log('Shipping Charge:' + this.shippingCharge);
                console.log('Subtotal:' + this.subTotal);

            }
        });
    }

}