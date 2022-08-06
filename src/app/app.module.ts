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
    PlatformSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }