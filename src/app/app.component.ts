import { Component } from '@angular/core';
import { CartService } from 'mf-cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public cartService: CartService) {}
}
