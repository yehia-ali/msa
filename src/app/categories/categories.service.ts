import { ICategory } from './../shared/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get('/assets/data/categories.json')
      .pipe(map(res => {
        const result: ICategory[] = [];

        const allCategories: any[] = res['arrayOfCategories'];
        allCategories.forEach(el => {
          const category: ICategory = {
            id: el['category_id'],
            name: el['category_name'],
            description: el['category_description'],
            productsCount: el['products_count'],
            imgSrc: el['category_url']
          }
          result.push(category);
        });

        return result;
      }));
  }
}
