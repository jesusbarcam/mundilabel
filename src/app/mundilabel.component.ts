import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { MundilabelService } from './commons';

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
  constructor(private translate: TranslateService,
              private mundilabelService: MundilabelService ) {
    // Configure translate module to idiomatization of app
    translate.setDefaultLang('es');
    translate.use('es');

  }// Constructor



}// MundilabelComponent
