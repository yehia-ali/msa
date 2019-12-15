import { CategoriesService } from './categories.service';
import { ICategory, ICard } from './../shared/models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'msa-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cards: ICard[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriesService.getAllCategories()
    .subscribe(res => {
      const categories: ICategory[] = res;
      categories.forEach((cat: ICategory) => {
        const card: ICard = {
          title: cat.name,
          description: cat.description,
          imgSrc: '',
          footerDescription: `Count of Products: ${cat.productsCount}`,
          buttonText: 'Open Products',
        }
        this.cards.push(card);
      });
    });
  }

}
