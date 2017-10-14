import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService } from '../../commons';



@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  private currentYear: number;
  private address: string;
  private town: string;
  private mail: string;
  private phone: string;
  private fax: string;
  private province: string;
  private nameCompany: string;



  constructor(private applicationSettings: MundilabelSettingsService) {
  }// Constructor



  ngOnInit() {
    this.nameCompany = this.applicationSettings.NAME_COMPANY;
    this.address = this.applicationSettings.ADDRESS_COMPANY;
    this.town = this.applicationSettings.TOWN_COMPANY;
    this.mail = this.applicationSettings.MAIL_COMPANY;
    this.phone = this.applicationSettings.PHONE_COMPANY;
    this.fax = this.applicationSettings.FAX_COMPANY;
    this.province = this.applicationSettings.PROVINCE_COMPANY;
    this.currentYear = new Date().getFullYear();
  }// NgOnInit

}// FooterComponent
