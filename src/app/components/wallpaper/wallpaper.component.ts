import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from 'ng2-translate';

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
  public currentTitleOfRoute: string;
  private titleStartShow: boolean;





  /**
   * @constructor
   * @param mundilabelSettings
   * @param mundilabelService
   */
  constructor(private mundilabelSettings: MundilabelSettingsService,
              private translateService: TranslateService,
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
          const newTitle: string = this.selectTitleDependOfNextRoute( activatedRoute );
          this.activateTitleOfNextRoute( newTitle );
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
   * @param title
   * @description
   */
  private activateTitleOfNextRoute(title: string) {
    this.translateService.get( title )
        .subscribe(( translation: string ) => {
          this.currentTitleOfRoute = translation;
          this.changeDetection.markForCheck();
        }); // Subscribe
  }// ActivateTitleOfNextRoute






  /**
   * @method
   * @private
   * @description
   */
  private selectTitleDependOfNextRoute(nextRoute: string) {
    switch ( nextRoute ) {
      case MundilabelRoutes[2].path: return 'TITLES_BY_ROUTE.ABOUT';
      case MundilabelRoutes[3].path: return 'TITLES_BY_ROUTE.HOWWEWORK';
      case MundilabelRoutes[4].path: return 'TITLES_BY_ROUTE.LOCATION';
      case MundilabelRoutes[5].path: return 'TITLES_BY_ROUTE.CONTACT';
      default: return '';
    }// Switch
  }// SelectTitleDependOfNextRoute


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
