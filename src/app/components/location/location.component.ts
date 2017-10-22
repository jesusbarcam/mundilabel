import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService } from '../../commons';



@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent implements OnInit {

  private latitude: Number;
  private longitude: Number;
  private zoom: number;

  private address: string;
  private town: string;
  private province: string;

  private phone: string;
  private fax: string;
  private mail: string;

  private params: any;


  constructor(private mundilabelSettings: MundilabelSettingsService) {
  }// Constructor


  ngOnInit() {
    this.zoom = 16;
    this.latitude = this.mundilabelSettings.LATITUDE_COMPANY;
    this.longitude = this.mundilabelSettings.LONGITUDE_COMPANY;
    this.address = this.mundilabelSettings.ADDRESS_COMPANY;
    this.town = this.mundilabelSettings.TOWN_COMPANY;
    this.province = this.mundilabelSettings.PROVINCE_COMPANY;
    this.phone = this.mundilabelSettings.PHONE_COMPANY;
    this.fax = this.mundilabelSettings.FAX_COMPANY;
    this.mail = this.mundilabelSettings.MAIL_COMPANY;

    this.params = {
      phone: this.phone,
      mail: this.mail
    };

  }// NgOnInit


}// LocationComponent
