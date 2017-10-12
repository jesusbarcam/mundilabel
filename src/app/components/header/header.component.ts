import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService } from '../../commons/mundilabel.settings';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  private logotypeImageURL: string;
  private topScroll: boolean;


  constructor(private mundilabelSettingsService: MundilabelSettingsService) {
  }// Constructor


  ngOnInit() {
    this.topScroll = false;
    this.logotypeImageURL = this.mundilabelSettingsService.MUNDILABEL_LOGOTYPE_URL;
  }// NgOnInit


}// HeaderComponent
