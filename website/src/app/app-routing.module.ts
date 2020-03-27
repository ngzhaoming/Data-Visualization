import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DatasetListComponent } from './dataset-list/dataset-list.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesListComponent},
  { path: '', component:HomePageComponent},
  { path: 'dataset', component: DatasetListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CategoriesListComponent, HomePageComponent, DatasetListComponent]