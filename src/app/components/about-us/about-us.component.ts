import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService  } from '../../commons';


@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutUsComponent implements OnInit {

  private packagesImageUrl: string;



  constructor(private mundilabelSettings: MundilabelSettingsService) {
  }// Constructor


  ngOnInit() {
    this.packagesImageUrl = this.mundilabelSettings.MUNDILABEL_PACKAGES_URL;
  }// NgOnInit

  
}// AboutUsComponent
