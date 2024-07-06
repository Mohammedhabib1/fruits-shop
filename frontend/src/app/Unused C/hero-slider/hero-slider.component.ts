import { Component } from '@angular/core';
import { ShopComponent } from "../shop/shop.component";

@Component({
    selector: 'app-hero-slider',
    standalone: true,
    templateUrl: './hero-slider.component.html',
    styleUrl: './hero-slider.component.scss',
    imports: [ShopComponent]
})
export class HeroSliderComponent {

}
