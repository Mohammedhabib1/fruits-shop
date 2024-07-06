import { Component } from '@angular/core';
import { HeaderComponent } from "../../app/header/header.component";
import { FooterComponent } from "../../app/footer/footer.component";

@Component({
    selector: 'app-static-home',
    standalone: true,
    templateUrl: './static-home.component.html',
    styleUrl: './static-home.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class StaticHomeComponent {

}
