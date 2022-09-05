import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { OurProjectPageComponent } from './components/pages/our-project-page/our-project-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { SupportPageComponent } from './components/pages/support-page/support-page.component';
import { TermsAndConditionsPageComponent } from './components/pages/terms-and-conditions-page/terms-and-conditions-page.component';

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
    path: 'support',
    component: SupportPageComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsPageComponent
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
