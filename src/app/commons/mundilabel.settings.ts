import { Injectable } from '@angular/core';


@Injectable()
export class MundilabelSettingsService {

  public readonly NAME_COMPANY: string = 'Mundilabel S.A.L';
  public readonly MAIL_COMPANY: string = 'mundilabel@hotmail.com';
  public readonly ADDRESS_COMPANY: string = 'Avenida de Castilla 23 - Nave 3';
  public readonly PHONE_COMPANY: string = '91 648 76 70';
  public readonly FAX_COMPANY: string = '91 656 17 44';
  public readonly TOWN_COMPANY: string = 'San Fernando de Henares';
  public readonly PROVINCE_COMPANY: string = 'Madrid';

  public readonly MUNDILABEL_LOGOTYPE_URL: string = '../../assets/images/mundilabel_logo.svg';
  public readonly MUNDILABEL_WALLPAPERS: any = {
    home: '../../assets/images/wallpaper-home.jpg',
    about: '../../assets/images/wallpaper-about.jpg',
    howwework: '../../assets/images/wallpaper-howwework.jpg',
    location: '../../assets/images/wallpaper-location.jpg',
    contact: '../../assets/images/wallpaper-contact.jpg'
  };



}// MundilabelSettingsService
