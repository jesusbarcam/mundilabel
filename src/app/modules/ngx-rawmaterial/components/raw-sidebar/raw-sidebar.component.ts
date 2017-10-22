import { Component, Input, Output, OnInit, OnChanges, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef } from '@angular/core';

import { RawSidebarHandlerService } from './raw-sidebar.handler';


@Component({
  selector: 'raw-sidebar',
  templateUrl: './raw-sidebar.component.html',
  styleUrls: ['./raw-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ RawSidebarHandlerService ]
})
export class RawSidebarComponent implements OnInit, OnChanges {

  @Input()
  private actived: boolean;

  private _isOpen: boolean;
  private _isClosed: boolean;



  /**
   * @method
   * @constructor
   */
  constructor(private sidebarHandler: RawSidebarHandlerService,
              private changeDetection: ChangeDetectorRef ) {
    this._isClosed = false;
  }// Constructor



  ngOnInit() {
    this.inicialize();
  }// NgOnInit



  ngOnChanges(changes: SimpleChanges) {
    if ( changes.actived && !changes.actived.isFirstChange() ) {
      this.sidebarHandler.toggleSidebar();
    }// If
  }// OnChanges





  /**
   * @method
   * @private
   * @description
   */
  private inicialize() {
    this.sidebarHandler.isOpen$.subscribe((state: boolean) => {
      this.whenSidebarStateChange( state );
    }); // Subscribe
  }// Inicialize





  /**
   * @method
   * @private
   * @param isOpen
   */
  private whenSidebarStateChange(state: boolean) {
    this._isOpen = state;
    this.changeDetection.markForCheck();
  }// WhenSidebarStateChange







  public get isOpen() {
    return this._isOpen;
  }// IsOpen


  public get isClosed() {
    return this._isClosed;
  }// IsClosed


}// RawSidebarComponent
