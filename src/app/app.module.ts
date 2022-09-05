import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/reusable/button/button.component';
import { LinkComponent } from './components/reusable/navigation/link/link.component';
import { NavigationComponent } from './components/reusable/navigation/navigation.component';
import { LogoComponent } from './components/reusable/logo/logo.component';
import { TitleComponent } from './components/reusable/title/title.component';
import { TextComponent } from './components/reusable/text/text.component';
import { HeaderComponent } from './components/header/header.component';
import { PlatformSectionComponent } from './components/pages/home-page/sections/platform-section/platform-section.component';
import { WhyChooseEnverSectionComponent } from './components/pages/home-page/sections/why-choose-enver-section/why-choose-enver-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { OurProjectPageComponent } from './components/pages/our-project-page/our-project-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicesSectionComponent } from './components/pages/home-page/sections/services-section/services-section.component';
import { ServicesComponent } from './components/pages/home-page/sections/services-section/services-card/services-card.component';
import { SubtitleComponent } from './components/reusable/subtitle/subtitle.component';
import { ServiceImageComponent } from './components/pages/home-page/sections/services-section/service-image/service-image.component';
import { PortfolioSectionComponent } from './components/pages/home-page/sections/portfolio-section/portfolio-section.component';
import { ImageCardComponent } from './components/pages/home-page/sections/portfolio-section/image-card/image-card.component';
import { ContactSectionComponent } from './components/pages/home-page/sections/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SupportPageComponent } from './components/pages/support-page/support-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsAndConditionsPageComponent } from './components/pages/terms-and-conditions-page/terms-and-conditions-page.component';

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
    PortfolioSectionComponent,
    ImageCardComponent,
    ContactSectionComponent,
    FooterComponent,
    SupportPageComponent,
    PrivacyPolicyPageComponent,
    TermsAndConditionsPageComponent,
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
