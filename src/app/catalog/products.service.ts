import { inject, Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProductsService } from '@shared/products-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements IProductsService {
  private httpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }
}
