import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader } from 'ng2-translate';

import { MundilabelRouting } from './mundilabel.routing';
import { MundilabelComponent } from './mundilabel.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutAsComponent } from './components/about-as/about-as.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';



export function translateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}// TranslateLoader



@NgModule({
  declarations: [
    MundilabelComponent,
    UnknowPageComponent,
    HomeComponent,
    AboutAsComponent,
    HowWeWorkComponent
  ],
  imports: [
    BrowserModule,
    MundilabelRouting,
    TranslateModule.forRoot()
  ],
  providers: [
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
