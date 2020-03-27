import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DatasetListComponent } from './dataset-list/dataset-list.component';
import { EnvironmentListComponent } from './environment-list/environment-list.component';
import { EducationListComponent } from './education-list/education-list.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesListComponent},
  { path: '', component:HomePageComponent},
  { path: 'dataset', component: DatasetListComponent},
  { path: 'environment', component: EnvironmentListComponent},
  { path: 'education', component: EducationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CategoriesListComponent, 
  HomePageComponent, 
  DatasetListComponent, 
  EnvironmentListComponent,
  EducationListComponent,
]