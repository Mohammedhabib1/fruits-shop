import { Component } from '@angular/core';
import { HeaderComponent } from '../../app/header/header.component';
import { FooterComponent } from "../../app/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss',
    imports: [HeaderComponent, FooterComponent,RouterModule]
})
export class CheckoutComponent {

}
