import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  itemName: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.getValue();
  }

  addCartItem(item: CartItem): void {
    const currentItems = this.getCartItems();
    this.cartItemsSubject.next([...currentItems, item]);
  }

  removeCartItem(index: number): void {
    const currentItems = this.getCartItems();
    currentItems.splice(index, 1);
    this.cartItemsSubject.next([...currentItems]);
  }
}
