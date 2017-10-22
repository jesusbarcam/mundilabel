import { Directive, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[raw-stopscroll]'
})
export class RawStopScrollDirective {


  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  private keys = {37: 1, 38: 1, 39: 1, 40: 1};


  constructor(@Inject(DOCUMENT) private document: any) {

  }


  @HostListener('mouseover', [])
  public mouseOver() {
    this.disableScroll();
  }// MouseOver



  @HostListener('mouseout', [])
  public mouseOut() {
    this.enableScroll();
  }// MouseOut



  /**
   * @method
   * @private
   * @param event
   */
  private preventDefault(event: Event) {
    const e = event || window.event;
    if ( e.preventDefault ) {
      e.preventDefault();
    }// If
    e.returnValue = false;
  }// PreventDefault



  /**
   * @method
   * @private
   * @param event
   */
  private preventDefaultForScrollKeys(event: any) {
    if ( this.keys[ event.keyCode ] ) {
      this.preventDefault( event );
      return false;
    }// If
  }// PreventDefaultForScrollKeys




  /**
   * @method
   * @private
   */
  private disableScroll() {

    if ( !window ) { return 0; }// If

    if ( window.addEventListener ) {
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    }// If
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = this.document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    this.document.onkeydown  = this.preventDefaultForScrollKeys;
  }// DisableScroll





  /**
   * @method
   * @private
   */
  private enableScroll() {
    if ( !window ) { return 0; }// If

    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }// If
    window.onmousewheel = this.document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    this.document.onkeydown = null;
  }// EnableScroll


}// RawStopScrollDirective
