
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addToCart(product: any) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, product]);
  }
}
