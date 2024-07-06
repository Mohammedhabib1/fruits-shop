import { Component } from '@angular/core';
import { HeaderComponent } from "../../app/header/header.component";
import { FooterComponent } from "../../app/footer/footer.component";

@Component({
    selector: 'app-single-news',
    standalone: true,
    templateUrl: './single-news.component.html',
    styleUrl: './single-news.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class SingleNewsComponent {

}
