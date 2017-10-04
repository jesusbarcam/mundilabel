import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService } from '../../commons/mundilabel.settings';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  private urlLogotype: string;

  constructor(private mundilabelSettingsService: MundilabelSettingsService) {
  }// Constructor


  ngOnInit() {
    this.urlLogotype = this.mundilabelSettingsService.MUNDILABEL_LOGOTYPE_URL;
  }// NgOnInit

}// HeaderComponent
