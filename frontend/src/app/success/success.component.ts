import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ShopComponent } from "../shop/shop.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, ShopComponent,RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  @Input() orderCompleted: boolean = false;
  @Input() orderId: string = '';

  constructor() { }
}