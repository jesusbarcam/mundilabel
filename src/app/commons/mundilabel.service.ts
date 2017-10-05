import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { MundilabelRoutes } from '../mundilabel.routing';

@Injectable()
export class MundilabelService {

  private activatedRoute: BehaviorSubject<string>;
  public activatedRoute$: Observable<string>;



  constructor() {
    this.activatedRoute = new BehaviorSubject<string>( MundilabelRoutes[0].path );
    this.activatedRoute$ = this.activatedRoute.asObservable();
  }// Constructor



  /**
   * @method
   * @param nextRoute
   */
  public activateRoute( nextRoute: string) {
    this.activatedRoute.next( nextRoute );
  }// activateRoute


}// MundilabelService
