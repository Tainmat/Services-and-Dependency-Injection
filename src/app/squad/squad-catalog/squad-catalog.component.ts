import { Component } from '@angular/core';
import { EngineersService } from '../engineers.service';
import { Product } from '@shared/product.model';
import { engineers } from './engineers';
import { CartService } from '@core/service/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  standalone: false,
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: [],
})
export class SquadCatalogComponent {
  squad: Observable<Product[]> = this.engineersService.getProducts();

  constructor(
    private cartService: CartService,
    private engineersService: EngineersService,
  ) {}

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}
