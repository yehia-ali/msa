import { ProductsService } from './../products/products.service';
import { PAGES } from './../shared/constants';
import { INavigationURL } from 'src/app/shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links: INavigationURL[] = [
    { text: 'Login', url: PAGES.login.url },
    { text: 'Home', url: PAGES.home.url },
    { text: 'Categories', url: PAGES.categories.url },
    { text: 'Products', url: PAGES.products.url }
  ];

  counter: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.productSelected.subscribe(product => {
      this.counter++;
    });
  }

}
