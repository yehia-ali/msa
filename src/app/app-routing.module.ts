import { HomeComponent } from './home/home.component';
import { PAGES } from './shared/constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: PAGES.home.url},
  { path: PAGES.home.path, component: HomeComponent},
  { path: PAGES.login.path, loadChildren: './login/login.module#LoginModule'},
  { path: PAGES.products.path, loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule)},
  { path: `${PAGES.products.path}/:id`, loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule)},
  { path: PAGES.categories.path, loadChildren: () => import(`./categories/categories.module`).then(m => m.CategoriesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
