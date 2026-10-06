import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Product[] {
    return productsArray;
  }
}
