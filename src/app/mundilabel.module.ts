import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader } from 'ng2-translate';
import { RawMaterialModule } from './modules/ngx-rawmaterial/rawmaterial.modules';

import { MundilabelRouting } from './mundilabel.routing';
import { MundilabelComponent } from './mundilabel.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/header/components/navigator/navigator.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';

import { MundilabelSettingsService } from './commons/mundilabel.settings';
import { MundilabelService } from './commons/mundilabel.service';
import { LocationComponent } from './components/location/location.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';



export function translateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}// TranslateLoader



@NgModule({

  declarations: [
    MundilabelComponent,
    UnknowPageComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NavigatorComponent,
    LogotypeComponent,
    WallpaperComponent,
    LocationComponent,
    SidebarMenuComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    MundilabelRouting,
    RawMaterialModule,
    TranslateModule.forRoot()
  ],

  providers: [
    MundilabelService,
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

export class MundilabelModule { }// MundilabelModule
