import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { MundilabelSettingsService, MundilabelService } from '../../commons';
import { MundilabelRoutes } from '../../mundilabel.routing';


@Component({
  selector: 'wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WallpaperComponent implements OnInit {


  public wallpaperUrl: string;



  /**
   * @constructor
   * @param mundilabelSettings
   * @param mundilabelService
   */
  constructor(private mundilabelSettings: MundilabelSettingsService,
              private mundilabelService: MundilabelService,
              private changeDetection: ChangeDetectorRef) {

    const initRoute: string = (MundilabelRoutes[1].path).replace('/' , '');
    this.wallpaperUrl = mundilabelSettings.MUNDILABEL_WALLPAPERS[ initRoute ];

  }// Constructor





  ngOnInit() {
    this.mundilabelService.activatedRoute$
        .subscribe((activatedRoute) => {

          this.wallpaperUrl = this.mundilabelSettings.MUNDILABEL_WALLPAPERS[ activatedRoute ];
          this.changeDetection.markForCheck();

        }); // Subscribe
  }// NgOnInit




}// WallpaperComponent
