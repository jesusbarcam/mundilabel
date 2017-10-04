import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MundilabelSettingsService } from '../../commons/mundilabel.settings';
@Component({
  selector: 'wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WallpaperComponent implements OnInit {


  public wallpaperUrl: string;


  constructor(private mundilabelSettings: MundilabelSettingsService) {
    this.wallpaperUrl = mundilabelSettings.MUNDILABEL_WALLPAPERS[0];
  }// Constructor



  ngOnInit() {
  }// NgOnInit


}// WallpaperComponent
