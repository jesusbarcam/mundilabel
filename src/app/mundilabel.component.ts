import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'mundilabel-app',
  templateUrl: './mundilabel.component.html',
  styleUrls: ['./mundilabel.component.scss']
})

export class MundilabelComponent {

  
  /**
   * @method
   * @constructor
   * @param translate
   */
  constructor(translate: TranslateService) {
    // Configure translate module to idiomatization of app
    translate.setDefaultLang('es');
    translate.use('es');

  }// Constructor



}// MundilabelComponent
