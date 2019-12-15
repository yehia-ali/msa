import { IProduct } from './../shared/models/product.interface';
import { map } from 'rxjs/Operators';
import { of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loadedProducts: IProduct[];
  cartProducts: IProduct[] = [];
  productSelected = new Subject<IProduct>();
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('/assets/data/products.json')
    .pipe(map((res: any[]) => {
      const result: IProduct[] = [];
      res['arrayOfProducts'].forEach(el => {
        const product: IProduct = {
          id: el['product_id'],
          name: el['product_name'],
          imgSrc: el['product_image'],
          description: `Product manifaturer is <strong>${el['product_manufacturer']}</strong><br>
                        Product URL is <a href=${el['product_url']}>${el['product_url']}</a><br>
                        Product model is <strong>${el['product_model']}</strong>`,
          categoryId: +el['product_master_category'],
          price: el['product_price']
        };
        result.push(product);
      });
      this.loadedProducts = result;
      return result;
    }));
  }
  getAllProductsByCatId(id: number) {
    const result = this.loadedProducts.filter(el => el.categoryId === id);
    return of(result);
  }
  addToCart(product: IProduct) {
    this.cartProducts.push(product);
    this.productSelected.next(product);
  }
}
