import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader } from 'ng2-translate';

import { MundilabelComponent } from './mundilabel.component';



export function translateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}// TranslateLoader



@NgModule({
  declarations: [
    MundilabelComponent
  ],
  imports: [
    BrowserModule,
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
