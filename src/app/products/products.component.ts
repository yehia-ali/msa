import { IProduct } from './../shared/models/product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';
import { ICard } from 'src/app/shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msa-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cards: ICard[] = [];

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        if (this.productService.loadedProducts) {
          this.filterCategory(params);
        } else {
          this.productService.getAllProducts()
          .subscribe(() => this.filterCategory(params));
        }
        
      } else {
        /** Get all products */
        this.productService.getAllProducts()
        .subscribe(res => {
          const products: IProduct[] = res;
          products.forEach((pro: IProduct) => {
            const card: ICard = {
              title: pro.name,
              description: pro.description,
              imgSrc: pro.imgSrc,
              footerDescription: `Product price: ${pro.price}`,
              buttonText: 'Add to cart',
            }
            this.cards.push(card);
          });
        });
      }
    });
    
  }

  filterCategory(params) {
    /** Get products under this category id */
    this.productService.getAllProductsByCatId(+params['id'])
    .subscribe(res => {
      const products: IProduct[] = res;
      products.forEach((pro: IProduct) => {
        const card: ICard = {
          title: pro.name,
          description: pro.description,
          imgSrc: pro.imgSrc,
          footerDescription: `Product price: ${pro.price}`,
          buttonText: 'Add to cart',
        }
        this.cards.push(card);
      });
    });
  }

}
