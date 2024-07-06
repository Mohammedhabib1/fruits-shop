import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    imports: [HeaderComponent, FooterComponent,RouterOutlet]
})
export class RootComponent {

}
