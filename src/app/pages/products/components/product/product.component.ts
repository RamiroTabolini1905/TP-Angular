import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: any;
  constructor(
    private _cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  addProductToCart() {
    this._cartService.addProductToCart(this.productData);
    //console.log(this.productData);
    this._snackBar.open(
      `${this.productData.title} agregado con exito!`,
      undefined,
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      }
    );
  }
}
