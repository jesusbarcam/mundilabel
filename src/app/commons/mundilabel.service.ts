import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { MundilabelRoutes } from '../mundilabel.routing';

@Injectable()
export class MundilabelService {

  private activatedRoute: BehaviorSubject<string>;
  public activatedRoute$: Observable<string>;

  private activatedSidebar: BehaviorSubject<boolean>;
  public activatedSidebar$: Observable<boolean>;




  constructor(private router: Router ) {

    this.activatedRoute = new BehaviorSubject<string>( MundilabelRoutes[0].path );
    this.activatedRoute$ = this.activatedRoute.asObservable();

    this.activatedSidebar = new BehaviorSubject<boolean>( false );
    this.activatedSidebar$ = this.activatedSidebar.asObservable();

  }// Constructor




  /**
   * @method
   * @public
   * @description
   */
  public sidebarIsOpen() {
    return this.activatedSidebar.getValue();
  }// SidebarIsOpen






  /**
   * @method
   * @public
   * @param nextRoute
   */
  public activateRoute(nextRoute: string) {
    this.activatedRoute.next( nextRoute );
  }// activateRoute




  /**
   * @method
   * @public
   * @param data
   */
  public whenChangeActivedRoute(data: any) {
    let currentUrl: string = data.url.replace('/', '' );
    currentUrl = ( currentUrl === '') ? MundilabelRoutes[1].path : currentUrl;
    this.activateRoute( currentUrl );
    window.scrollTo(0, 0);
    return currentUrl;
  }// WhenChangeActivedRoute





  /**
   * @method
   * @public
   * @param indexRoute
   */
  public navigationTo(indexRoute: number) {
    const nextRoute: string = MundilabelRoutes[ indexRoute ].path;
    this.changeSidebarState();
    this.router.navigateByUrl( nextRoute );
  }// NavigationTo




  /**
   * @method
   * @public
   * @param newState
   */
  public changeSidebarState() {
    this.activatedSidebar.next( !this.activatedSidebar.getValue() );
  }// ChangeSidebarState


}// MundilabelService
