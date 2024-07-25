import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ShopComponent } from "../shop/shop.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent, RouterModule, ShopComponent,RouterLink]
})
export class HomeComponent {

    

}
