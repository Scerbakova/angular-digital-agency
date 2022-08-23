import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/reusable/button/button.component';
import { LinkComponent } from './components/header/link/link.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { TitleComponent } from './components/reusable/title/title.component';
import { TextComponent } from './components/reusable/text/text.component';
import { HeaderComponent } from './components/header/header.component';
import { PlatformSectionComponent } from './pages/home-page/sections/platform-section/platform-section.component';
import { WhyChooseEnverSectionComponent } from './pages/home-page/sections/why-choose-enver-section/why-choose-enver-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { OurProjectPageComponent } from './pages/our-project-page/our-project-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesSectionComponent } from './pages/home-page/sections/services-section/services-section.component';
import { ServicesComponent } from './pages/home-page/sections/services-section/services-card/services-card.component';
import { SubtitleComponent } from './components/reusable/subtitle/subtitle.component';
import { ServiceImageComponent } from './pages/home-page/sections/services-section/service-image/service-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LinkComponent,
    NavigationComponent,
    LogoComponent,
    TitleComponent,
    TextComponent,
    HeaderComponent,
    PlatformSectionComponent,
    WhyChooseEnverSectionComponent,
    HomePageComponent,
    ServicePageComponent,
    OurProjectPageComponent,
    AboutPageComponent,
    ServicesSectionComponent,
    ServicesComponent,
    SubtitleComponent,
    ServiceImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
