import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from '@core/service/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Observable<Product[]> = this.productService.getProducts();

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
  ) {}

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
