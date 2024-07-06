// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.scss'
// })
// export class CartComponent {

// }


// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../all-service/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart);
    });
  }
}
