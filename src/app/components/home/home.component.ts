import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService } from '../../commons';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


  private handImageUrl: string;
  private labelImageUrl: string;
  private phone: string;
  private mail: string;



  constructor(private applicationSettings: MundilabelSettingsService) { }



  ngOnInit() {
    this.mail = this.applicationSettings.MAIL_COMPANY;
    this.phone = this.applicationSettings.PHONE_COMPANY;
    this.handImageUrl = this.applicationSettings.MUNDILABEL_HAND_HOME_IMAGE_URL;
    this.labelImageUrl = this.applicationSettings.MUNDILABEL_LABEL_IMAGE_URL;
  }// NgOnInit



}// HomeComponent
