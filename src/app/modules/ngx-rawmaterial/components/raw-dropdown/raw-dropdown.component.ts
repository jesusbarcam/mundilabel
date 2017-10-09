import { Component, OnInit, HostListener, OnDestroy, ContentChildren, ElementRef,
  Input, ViewChild, AfterViewInit, Renderer, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { RawDropdownTriggerDirective } from './raw-dropdown-trigger.directive';



export type DropdownPosition = 'start' | 'middle' | 'end';


@Component({
  selector: 'raw-dropdown',
  templateUrl: './raw-dropdown.component.html',
  styleUrls: [ './raw-dropdown.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RawDropdownComponent implements OnInit, AfterViewInit, OnDestroy {


  @Input('position')
  private position: DropdownPosition;

  @Input('width')
  private width: number;

  @Input('dark')
  private dark: boolean;

  @Input('animate')
  private animate: boolean;

  @Input('closeWhenClickEvent')
  private closeWhenClickEvent: any;

  @Input('closeWhenMouseEvent')
  private closeWhenMouseEvent: boolean;



  @ViewChild('dropdownContainer')
  private dropdownContainer: ElementRef;




  // Atributos
  private startHidden: boolean;
  private visible: boolean;
  private top: number;
  private left: number;
  private arrowPosition: number;
  private listenClickEvent: any;
  private listenMouseEvent: any;
  private dropdownTrigger: RawDropdownTriggerDirective;




  constructor( private element: ElementRef,
               private changeDetector: ChangeDetectorRef,
               private renderer: Renderer ) {

    this.width = 420;
    this.animate = false;
    this.visible = false;
    this.position = 'end';
    this.startHidden = false;
    this.closeWhenClickEvent = true;
    this.closeWhenMouseEvent = false;
    this.dark = false;

  }// Constructor




  /**
   * @method
   * @lifecycle
   */
  ngOnInit() {
  }// NgOnInit






  /**
   * @lifecycle
   * @method
   * @description
   * Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   * Add 'implements AfterViewInit' to the class.
   */
  ngAfterViewInit() {
    // Injectamos los listener que necesitamos
    // para manejar la funcionalidad del componente
    this.createListenerToClickEvent();
    this.createListenerToMouseEvent();
  }// NgAfterViewInit





  /**
   * @lifecycle
   * @method
   * @description
   * Called once, before the instance is destroyed.
   * Add 'implements OnDestroy' to the class.
   */
  ngOnDestroy() {
    if (this.closeWhenClickEvent) { this.listenClickEvent(); }// If
    if (this.closeWhenMouseEvent) { this.listenMouseEvent(); }// If
  }// NgOnDestroy




  /**
   * @private
   * @method
   * @description
   */
  private createListenerToClickEvent() {
    if ( this.closeWhenClickEvent ) {
      this.listenClickEvent = this.renderer.listenGlobal('document', 'mousedown', (event: any) => this.onDocumentTriggerEvent(event));
    }// If
  }// CreateListenerToClickEvent





  /**
   * @private
   * @method
   * @description
   */
  private createListenerToMouseEvent() {
    if ( this.closeWhenMouseEvent ) {
      this.listenMouseEvent = this.renderer.listenGlobal('document', 'mouseover', (event: any ) => this.onDocumentTriggerEvent(event));
     }// If
  }// CreateListenerToMouseEvent




  /**
   * @private
   * @method
   * @description
   * 
   */
  private onDocumentTriggerEvent = (event: any) => {

    const element = this.element.nativeElement;

    if ( !element || !this.dropdownTrigger ) {
      return;
    }// If

    if (element.contains(event.target) || this.dropdownTrigger.getElement().contains(event.target)) {
      return;
    }// If
    // Llamamos al cierre del dropdown desde el disparador
    // que es desde donde se debe hacer, el disparador es
    // el que lleva el control del estado del dropdown.
    this.dropdownTrigger.hide();
    // this.onCloseFromOutside.emit(undefined);

  }// OnDocumentTriggerEvent






/**
 * @private
 * @method
 * @description
 * Método encargado de reposicionar el dropdown
 * en referencia al trigger dropdown directive
 */
  private reposition() {

    const trigger = this.dropdownTrigger.getElement();
    const dropdown = this.element.nativeElement;

    switch ( this.position ) {
      case 'end': this.endPositionWithFixedPosition(trigger, dropdown); break;
      // case 'middle': this.middlePosition():break;
      // case 'start': this.startPosition();break;
      default: this.endPositionWithFixedPosition(trigger, dropdown);
    }// switch

  }// Reposition







  /**
   * @private
   * @method
   * @param trigger
   * @param dropdown
   * @description
   * Posiciona en la parte final del dropdown
   * según la posición del trigger
   */
  private endPositionWithFixedPosition(trigger: ElementRef, dropdown: ElementRef) {

    const triggerHost = this.offset( trigger );
    const dropdownHost = this.offset( dropdown );

    const position = Math.round( triggerHost.left );

    this.left = (Math.round(position)) - ((this.width * 75) / 100);
    this.arrowPosition = (position) + ((Math.round((triggerHost.width / 2))) - (10));

  }// endPositionWithFixedPosition







/**
   * @private
   * @method
   * @param nativeEl
   * @description 
   */
  private offset(nativeEl: any): { width: number, height: number, top: number, left: number } {
    const boundingClientRect = nativeEl.getBoundingClientRect();
    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
      left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
    }; // return
  }// Offset







  /**
   * @protected
   * @method
   * @param nativeEl
   * @description
   */
  protected bodyPosition(nativeEl: HTMLElement): { width: number, height: number, top: number, left: number } {

    let offsetParentBCR = { top: 0, left: 0 };
    const elBCR = this.offset( nativeEl );
    const offsetParentEl = this.parentOffsetEl(nativeEl);

    if (offsetParentEl !== window.document) {
      offsetParentBCR = this.offset(offsetParentEl);
      offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
      offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
    }// If

    const boundingClientRect = nativeEl.getBoundingClientRect();

    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: elBCR.top - offsetParentBCR.top,
      left: elBCR.left - offsetParentBCR.left
    }; // Return

  }// BodyPosition




   /**
     * @protected
     * @method
     * @param nativeEl
     * @description
     *
     */
  protected parentOffsetEl(nativeEl: HTMLElement): any {

    let offsetParent: any = nativeEl.offsetParent || window.document;
    while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
      offsetParent = offsetParent.offsetParent;
    }// while

    return offsetParent || window.document;

  }// parentOffsetEl




  /**
   * @method
   * @protected
   * @param nativeEl
   * @param cssProp
   * @description
   */
  protected getStyle(nativeEl: HTMLElement, cssProp: string): string {

    if ((nativeEl as any).currentStyle) // IE
        return (nativeEl as any).currentStyle[cssProp];

    if (window.getComputedStyle)
        return (window.getComputedStyle as any)(nativeEl)[cssProp];

    // finally try and get inline style
    return (nativeEl.style as any)[cssProp];
  }// GetStyle




  /**
     * @protected
     * @method
     * @param nativeEl
     * @description
     */
  protected isStaticPositioned(nativeEl: HTMLElement): boolean {
      return (this.getStyle(nativeEl, 'position' ) || 'static' ) === 'static';
  }// isStaticPositioned






  /**
   * @public
   * @method
   * @description
   * Método que muestra el dropdown en pantalla
   */
  public show() {

    if ( !this.visible ) {
      this.reposition();
      this.visible = true;
      this.changeDetector.markForCheck();
    }// If

  }// Show





  /**
   * @public
   * @method
   * @description
   * Método que oculta el dropdown en la vista
   */
  public hide() {
    if ( this.visible ) {
      console.log(" HIDE METHOD EXECUTE!");
      this.startHidden = true;
      this.changeDetector.markForCheck();


      setTimeout(() => {
        console.log(" HIDE METHOD TIMEOUT EXECUTE!");
        this.visible = false;
        this.startHidden = false;
        this.changeDetector.markForCheck();
      }, (this.animate) ? 450 : 0 );

    }// If
  }// Hide




  /**
   * @public
   * @method
   * @description
   * Método que muestra o oculta el popover
   */
  public toggle() {
    if (!this.visible) {
      this.show();
    } else {
      this.hide();
    }// If
  }// Toggle





  /**
   * @public
   * @method
   */
  public set setTriggerDropdown(instance: RawDropdownTriggerDirective){
    this.dropdownTrigger = instance;
  }// setTriggerDropdown



}// IFCDropdownComponent
