import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { TextComponent } from './components/text/text.component';
import { HeaderComponent } from './components/header/header.component';
import { PlatformSectionComponent } from './components/platform-section/platform-section.component';
import { WhyChooseEnverSectionComponent } from './components/why-choose-enver-section/why-choose-enver-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { OurProjectPageComponent } from './pages/our-project-page/our-project-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServicesComponent } from './components/services-card/services-card.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { ServiceImageComponent } from './components/service-image/service-image.component';

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
