import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor() {
    super();
   }

   override getProducts(): Observable<Product[]> {
     // return super.getProducts().slice(1, 3);
     return super.getProducts();
   }

}
