import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartLenght = 0;

  links = [
    {
      path: 'home',
      desc: 'Inicio',
      isIcon: false,
    },
    {
      path: 'products',
      desc: 'Productos',
      isIcon: false,
    },
    {
      path: 'contact',
      desc: 'Contacto',
      isIcon: false,
    },
    {
      path: 'cart',
      desc: 'shopping_cart',
      isIcon: true,
    },
  ];

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getCartLenght();
  }

  getCartLenght() {
    this._cartService
      .getCartLength()
      .subscribe((data) => (this.cartLenght = data));
  }
}
