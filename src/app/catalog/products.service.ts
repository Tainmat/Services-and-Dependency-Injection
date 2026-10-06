import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Subject<Product[]> = new Subject<Product[]>();

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  refreshProducts() {
    this.products.next(productsArray);
  }
}
