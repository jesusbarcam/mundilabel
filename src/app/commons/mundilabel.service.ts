import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { MundilabelRoutes } from '../mundilabel.routing';

@Injectable()
export class MundilabelService {

  private activatedRoute: BehaviorSubject<string>;
  public activatedRoute$: Observable<string>;

  private activatedSidebar: BehaviorSubject<boolean>;
  public activatedSidebar$: Observable<boolean>;




  constructor() {

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
   * @param newState
   */
  public changeSidebarState() {
    this.activatedSidebar.next( !this.activatedSidebar.getValue() );
  }// ChangeSidebarState


}// MundilabelService
