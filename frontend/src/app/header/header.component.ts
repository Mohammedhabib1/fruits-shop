import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, StoreModule, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { CartState } from '../ngrx/cart.reducer';
import { getCartSelector } from '../ngrx/cart.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, StoreModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  cartItemsCount$!: Observable<number>;

  constructor(private cartStore: Store<CartState>) { }

  ngOnInit(): void {
    this.cartItemsCount$ = this.cartStore.pipe(
      select(getCartSelector),
      map(cartState => Object.keys(cartState).length)
    );
  }

}
