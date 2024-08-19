import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../../app/footer/footer.component";
import { HeaderComponent } from '../../app/header/header.component';
import { OrderService } from '../all-service/checkout.service';
import { Product } from '../model/product.model';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartState } from '../ngrx/cart.reducer';
import { getCartSelector } from '../ngrx/cart.selector';
import { ResponseStatus } from '../model/Response';
import { addCartItem, setCartItems } from '../ngrx/cart.actions';

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss',
    imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, ReactiveFormsModule, HttpClientModule],
    providers: [OrderService]
})
export class OrderComponent {

    orderForm: FormGroup;
    subTotal: number = 0;
    cartItems: Product[] = [];
    cartItems$!: Observable<Product[]>;
    shippingCharge: number = 0;
    
    

    constructor(
        private cartStore: Store<CartState>,
        private router: Router,
        private checkoutService: OrderService,
        private fb: FormBuilder) {
        this.orderForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            comment: ['']
        });
        
        localStorage.setItem('total', this.subTotal.toString());
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        this.orderForm.patchValue({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            comment: user.comment
        });


    }

    onSubmit() {
        const userStr = sessionStorage.getItem('user');
        if (userStr) {
            const userData = JSON.parse(userStr);
            const data = { ...this.orderForm.value, user: userData, status: "Pending" }
            this.checkoutService.postData(data).subscribe((res) => {
                console.log(res);
                if (res.status == ResponseStatus.SUCCESS) {
                    sessionStorage.setItem('order', JSON.stringify(res.data));
                    sessionStorage.removeItem("cart");
                    this.cartStore.dispatch(setCartItems({ cart: [] }));
                    this.router.navigate(['/payment']);
                }else{
                    alert(res.message);
                }
                
            });
        }
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

