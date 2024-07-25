import { Component } from '@angular/core';
import { FooterComponent } from "../../app/footer/footer.component";
import { HeaderComponent } from "../../app/header/header.component";

@Component({
    selector: 'app-single-product',
    standalone: true,
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class SingleProductComponent {

}
