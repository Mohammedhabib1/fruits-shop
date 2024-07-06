import { Component } from '@angular/core';
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
    selector: 'app-slider-home',
    standalone: true,
    templateUrl: './slider-home.component.html',
    styleUrl: './slider-home.component.scss',
    imports: [HeroSliderComponent, HeroComponent]
})
export class SliderHomeComponent {

}
