import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from '../app.service';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Product } from '../model/product.model';
import { addCartItem } from '../ngrx/cart.actions';


@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    imports: [CommonModule, HeaderComponent, FooterComponent, HttpClientModule],
    providers: [AppService,]
})
export class ShopComponent implements OnInit {

    products: Product[] = [];

    constructor(private appService: AppService, private cartStore: Store<any>) { }

    ngOnInit() {
        this.appService.getAllProducts().subscribe((res) => {
            this.products = res.data;
            console.log(this.products);
        });
    }

    addToCart(product: Product) {
        this.cartStore.dispatch(addCartItem(product));
    }

}


