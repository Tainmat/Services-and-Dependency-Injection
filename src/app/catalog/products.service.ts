import { inject, Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }
}
