


// src/app/cart/cart.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store, StoreModule, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product.model';
import { CartState } from '../ngrx/cart.reducer';
import { getCartSelector } from '../ngrx/cart.selector';
import { RouterLink } from '@angular/router';
import { removeCartItem } from '../ngrx/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, StoreModule,RouterLink],
})
export class CartComponent implements OnInit {
  subTotal: number = 0;
  cartItems: Product[] = [];
  cartItems$!: Observable<Product[]>;
  shippingCharge: number = 0;

  constructor(private cartStore: Store<CartState>) { }

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
        if (item>=4) {
          this.shippingCharge = 100
        }
        console.log('Shipping Charge:' + this.shippingCharge);
        console.log('Subtotal:' + this.subTotal);
        
      }
    }); 
  }

 
}
