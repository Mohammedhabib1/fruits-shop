import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-breadcrumn',
    standalone: true,
    templateUrl: './breadcrumn.component.html',
    styleUrl: './breadcrumn.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class BreadcrumnComponent {

}
