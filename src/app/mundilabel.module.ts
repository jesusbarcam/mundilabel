import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader } from 'ng2-translate';

import { MundilabelRouting } from './mundilabel.routing';
import { MundilabelComponent } from './mundilabel.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/header/components/navigator/navigator.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';

import { MundilabelSettingsService } from './commons/mundilabel.settings';
import { LocationComponent } from './components/location/location.component';



export function translateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}// TranslateLoader



@NgModule({
  declarations: [
    MundilabelComponent,
    UnknowPageComponent,
    HomeComponent,
    AboutUsComponent,
    HowWeWorkComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NavigatorComponent,
    LogotypeComponent,
    WallpaperComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    MundilabelRouting,
    TranslateModule.forRoot()
  ],
  providers: [
    MundilabelSettingsService,
    TranslateService,
    {
      provide: TranslateLoader,
      useFactory: translateLoader,
      deps: [ Http ]
    }
  ],
  bootstrap: [ MundilabelComponent ]
})

export class MundilabelModule { }
