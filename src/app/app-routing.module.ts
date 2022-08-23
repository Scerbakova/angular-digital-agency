import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { OurProjectPageComponent } from './components/pages/our-project-page/our-project-page.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'services',
    component: ServicePageComponent
  },
  {
    path: 'project',
    component: OurProjectPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
