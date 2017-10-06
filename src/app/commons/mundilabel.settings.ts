import { Injectable } from '@angular/core';


@Injectable()
export class MundilabelSettingsService {

  public readonly MUNDILABEL_LOGOTYPE_URL: string = '';
  public readonly MUNDILABEL_WALLPAPERS: any = {
    home: '../../assets/images/wallpaper-home.jpg',
    about: '../../assets/images/wallpaper-about.jpg',
    howwework: '../../assets/images/wallpaper-howwework.jpg',
    location: '../../assets/images/wallpaper-location.jpg',
    contact: '../../assets/images/wallpaper-contact.jpg'
  };



}// MundilabelSettingsService
