import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { MundilabelRoutes } from '../../../../mundilabel.routing';
import { MundilabelService } from '../../../../commons/mundilabel.service';


@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorComponent implements OnInit {



  private currentUrl: string;



  constructor(private router: Router,
              private mundilabelService: MundilabelService,
              private changeDetection: ChangeDetectorRef) {
   }// Constructor




  ngOnInit() {
    this.router.events.subscribe((data: any) => {

      if ( data && data.url ) {
        this.currentUrl = data.url.replace('/', '' );
        this.currentUrl = ( this.currentUrl === '')? MundilabelRoutes[1].path : this.currentUrl;
        this.mundilabelService.activateRoute( this.currentUrl );
        window.scrollTo(0, 0);
        this.changeDetection.markForCheck();
      }// If

    }); // Subscribe

  }// NgOnInit




  /**
   * @method
   * @public
   * @param index
   * @description
   */
  public isActivated(index: number) {
    return (this.currentUrl === MundilabelRoutes[ index ].path );
  }// IsActivated






  /**
   * @method
   * @public
   * @param indexRoute
   * @description
   */
  public navigationTo(indexRoute: number) {
    const nextRoute: string = MundilabelRoutes[ indexRoute ].path;

    if ( this.mundilabelService.sidebarIsOpen() ) {
      this.mundilabelService.changeSidebarState();
    }// If

    this.router.navigateByUrl( nextRoute );
  }// NavigationTo




  /**
   * @method
   * @public
   * @description
   * When is a movile device, user click
   * to open sidebar navigator component
   */
  public openNavigationSidebar() {
    this.mundilabelService.changeSidebarState();
  }// OpenNavigationSidebar



}// NavigatorComponent
