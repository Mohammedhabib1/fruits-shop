
import { Component, Input } from '@angular/core';
import { Order } from '../../../../model/data/order-model';


@Component({
  selector: 'app-order-detail-modal',
  templateUrl: './order-detail-modal.component.html',
  styleUrls: ['./order-detail-modal.component.css']
})
export class OrderDetailModalComponent {
  @Input() order!: Order;

  closeModal() {
    // Logic to close the modal
  }
}

