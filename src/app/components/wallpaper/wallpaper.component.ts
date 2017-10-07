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


  public static readonly TIME_ANIMATIONS_TITLES: number = 650;

  public wallpaperUrl: string;
  public routeWithoutTitles: string;
  private titleStartShow: boolean;


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

    this.titleStartShow = false;
    this.routeWithoutTitles = MundilabelRoutes[1].path;

  }// Constructor





  /**
   * @method
   * @lifecycle
   */
  ngOnInit() {
    this.inicializeControlOfRoutes();
  }// NgOnInit







  /**
   * @method
   * @private
   * @description
   */
  private inicializeControlOfRoutes() {
    // Inicialize observation of actived route
    // of application
    this.mundilabelService.activatedRoute$
    .subscribe((activatedRoute) => {
      // Hidden titles of view
      this.titleStartShow = false;
      // If activatedRouted is route ok
      if ( activatedRoute !== '' ) {
        this.activatedNewRoute( activatedRoute );
        // and activatedRoute is route with titles
        if ( activatedRoute !== this.routeWithoutTitles ) {
          this.countDownStartTitleShow();
        }// If
      }// If

    }); // Subscribe
  }// InicializeControlOfRoutes




  /**
   * @method
   * @private
   * @description
   */
  private activatedNewRoute(nextRoute: string) {
    this.wallpaperUrl = this.mundilabelSettings.MUNDILABEL_WALLPAPERS[ nextRoute ];
    this.changeDetection.markForCheck();
  }// Inicialize



  /**
   * @method
   * @private
   * @description
   */
  private countDownStartTitleShow() {
    setTimeout(() => {
      this.titleStartShow = true;
      this.changeDetection.markForCheck();
    }, WallpaperComponent.TIME_ANIMATIONS_TITLES );
  }// CountDownStartTitleShow



}// WallpaperComponent
