import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductsService } from '@shared/products-service.interface';
import { Product } from '@shared/product.model';
import { engineers } from './squad-catalog/engineers';

@Injectable({
  providedIn: 'root',
})
export class EngineersService implements IProductsService {
  getProducts(): Observable<Product[]> {
    return of(engineers);
  }
}
