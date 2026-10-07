import { Observable } from 'rxjs';
import { Product } from './product.model';

export interface IProductsService {
  getProducts(): Observable<Product[]>;
}
