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

  private upsClientLogoUrl: string;
  private lorealClientLogoUrl: string;
  private seurClientLogoUrl: string;
  private ifemaClientLogoUrl: string;
  private wurthClientLogoUrl: string;

  private phone: string;
  private mail: string;



  constructor(private applicationSettings: MundilabelSettingsService) { }



  ngOnInit() {
    this.mail = this.applicationSettings.MAIL_COMPANY;
    this.phone = this.applicationSettings.PHONE_COMPANY;
    this.handImageUrl = this.applicationSettings.MUNDILABEL_HAND_HOME_IMAGE_URL;
    this.labelImageUrl = this.applicationSettings.MUNDILABEL_LABEL_IMAGE_URL;

    this.upsClientLogoUrl = this.applicationSettings.MUNDILABEL_CLIENTS_LOGOS.ups;
    this.lorealClientLogoUrl = this.applicationSettings.MUNDILABEL_CLIENTS_LOGOS.loreal;
    this.wurthClientLogoUrl = this.applicationSettings.MUNDILABEL_CLIENTS_LOGOS.wurth;
    this.seurClientLogoUrl = this.applicationSettings.MUNDILABEL_CLIENTS_LOGOS.seur;
    this.ifemaClientLogoUrl = this.applicationSettings.MUNDILABEL_CLIENTS_LOGOS.ifema;
  }// NgOnInit



}// HomeComponent
