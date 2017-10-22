import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { MundilabelService } from '../../commons';
import { MundilabelRoutes } from '../../mundilabel.routing';


@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  private currentUrl: string;


  constructor(private router: Router,
              private changeDetection: ChangeDetectorRef,
              private mundilabelService: MundilabelService ) {
  }// Constructor



  ngOnInit() {
    this.router.events.subscribe((data: any) => {

      if ( data && data.url ) {
        this.currentUrl = this.mundilabelService.whenChangeActivedRoute( data );
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
    this.mundilabelService.navigationTo( indexRoute );
  }// NavigationTo


}// SidebarMenuComponent
