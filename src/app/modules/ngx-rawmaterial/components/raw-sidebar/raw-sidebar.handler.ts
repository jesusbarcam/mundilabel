import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RawSidebarHandlerService {

  private readonly DEFAULT_INIT_SIDEBAR_STATE: boolean = false;


  private isOpen: BehaviorSubject<boolean>;
  public isOpen$: Observable<boolean>;



  constructor() {
    this.isOpen = new BehaviorSubject<boolean>( this.DEFAULT_INIT_SIDEBAR_STATE );
    this.isOpen$ = this.isOpen.asObservable();
  }// Constructor


  /**
   * @method
   * @public
   * @description
   */
  public toggleSidebar() {
    this.isOpen.next( !this.isOpen.getValue() );
  }// ToggleSidebar



}// RawSidebarHandlerService
