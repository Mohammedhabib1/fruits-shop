

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../all-service/cart.service';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    imports: [CommonModule, HeaderComponent, FooterComponent, HttpClientModule],
    providers: [AppService, CartService]
})
export class ShopComponent implements OnInit {

    products: any[] = [];

    constructor(
        private appService: AppService,
        private cartService: CartService ) { }

    ngOnInit() {
        this.appService.getAllProducts().subscribe((res) => {
            this.products = res;
            console.log(this.products);
        });
    }

    // addToCart(product: any) {
    //         this.cartService.addToCart(product);
    //       }
}


// src/app/shop/shop.component.ts
// import { Component } from '@angular/core';
// import { HeaderComponent } from "../header/header.component";
// import { FooterComponent } from "../footer/footer.component";
// import { AppService } from '../app.service';
// import { HttpClientModule } from '@angular/common/http';
// import { CartService } from '../all-service/cart.service';

// @Component({
//   selector: 'app-shop',
//   standalone: true,
//   templateUrl: './shop.component.html',
//   styleUrls: ['./shop.component.scss'],
//   imports: [HeaderComponent, FooterComponent, HttpClientModule],
//   providers: [AppService, CartService]
// })
// export class ShopComponent {
//   products: any[] = [];

//   constructor(
//     private appService: AppService,
//     private cartService: CartService
//   ) { }

//   ngOnInit() {
//     this.appService.getAllProducts().subscribe((res) => {
//       this.products = res;
//       console.log(this.products);
//     });
//   }

//   addToCart(product: any) {
//     this.cartService.addToCart(product);
//   }
// }

