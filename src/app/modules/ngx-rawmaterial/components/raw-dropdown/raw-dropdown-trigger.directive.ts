import { Directive, OnInit, Input, Output, OnChanges, HostListener, ViewContainerRef,
         ComponentFactoryResolver, SimpleChange, EventEmitter } from '@angular/core';

import { RawDropdownComponent } from './raw-dropdown.component';




@Directive({
  selector: '[raw-dropdown-trigger]'
})
export class RawDropdownTriggerDirective implements OnInit, OnChanges {


  // Atributos de entrada
  @Input('raw-dropdown-trigger')
  private content: string | RawDropdownComponent;


  @Input('dropdown-disabled')
  private dropdownDisabled: boolean;


  // Atributos de salida
  @Output('onShown')
  private onShown: EventEmitter<RawDropdownTriggerDirective>;

  @Output('onHidden')
  private onHidden: EventEmitter<RawDropdownTriggerDirective>;


  // Atributos
  private disabled: boolean;
  private visible: boolean;





  /**
   * @method
   * @constructor
   */
  constructor(private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver ) {

    this.disabled = false;
    this.visible = false;

  }// Constructor





  /**
   * @lifecycle
   * @method
   * @description
   * Método del ciclo de vida de angular
   * inicializa todo lo necesario al inicio
   * de la instancia de este componente.
   */
  ngOnInit() {
    this.initialize();
  }// NgOnInit




  /**
   * @lifecycle
   * @method
   * @description
   * Método del ciclo de vida de angular
   * es llamado cuando se detecta algún tipo de
   * cambio en los atributos que son pasados a esta directiva
   */
  ngOnChanges(changes:{[propertyName: string]: SimpleChange}) {
    if( changes['dropdownDisabled'] && changes['dropdownDisabled'].currentValue ) {
      // this.hide();
    }// If
  }// NgOnChanges





  /**
   * @listener
   * @method
   * @description
   * Método que obtiene un evento 'click' 
   * si este se produce sobre el Host del elemento
   * que tenga alojada esta directiva.
   */
  @HostListener('click')
  showOrHideOnClick(): void {
    // if (this.popoverOnHover) return;
    if ( this.disabled ) {
      return;
    }// If
    this.toggle();
  }// showOrHideOnClick






  /**
   * @private
   * @method
   * @description
   * Método que inicializa y da valores
   * a todos aquellos atributos de este componente
   * que sean necesarios.
   */
  private initialize() {

    if ( this.content as RawDropdownComponent) {
      const dropdown: RawDropdownComponent = this.content as RawDropdownComponent;
      dropdown.setTriggerDropdown = this;
    }// If

    this.onShown = new EventEmitter<RawDropdownTriggerDirective>();
    this.onHidden = new EventEmitter<RawDropdownTriggerDirective>();

  }// Initialize





  /**
   * @private
   * @method
   * @description
   */
  private getDropdownElement(): RawDropdownComponent {

    if ( this.content as RawDropdownComponent ) {
      return this.content as RawDropdownComponent;
    } // If

  }// GetDropdownElement





  /**
   * @private
   * @method
   * @description
   * Método que genera un dropdown dinamicamente
   */
  private createDropdownElement(): RawDropdownComponent {
    // Si el content no es la referencia a un componente IFCDropdown debemos
    // de crear una instancia y devolverla
    const factory = this.resolver.resolveComponentFactory( RawDropdownComponent );
    const componentRef = this.viewContainerRef.createComponent( factory );
    return componentRef.instance as RawDropdownComponent;

  }// CreateDropdownElement




  /**
   * @private
   * @method
   * @param action
   * @description
   * Método que se encarga de realizar una acción
   * que se encuentre dentro de las acciones del dropdown component.
   */
  private executeDropdownAction(action: string): RawDropdownComponent {
    const dropdown: RawDropdownComponent = this.getDropdownElement();
    dropdown[ action ]();
    return dropdown;
  }// ExecuteDropdownAction





  /**
   * @private
   * @method
   * @description
   * Método encargado de balancear el 
   * estado del componente dropdown, si 
   * esta visible lo oculta y viceversa.
   */
  private toggle() {
    if (!this.visible) { return this.show(); }// if
    this.hide();
  }// Toggle





  /**
   * @private
   * @method
   * @description
   * Este método nos dice si el contenido a mostrar 
   * es la referencia de un componente IFCDropdown o no.
   */
  private isDropdownComponentRef() {
    return this.content as RawDropdownComponent;
  }// IsDropdownComponentRef





  /**
   * @public
   * @method
   * @description
   * Método que se encarga de mostrar 
   * el componente dropdown en la vista 
   */
  public show() {
    if ( !this.visible ) {

      // Comprobamos que el contenido a mostrar es la referencia a un componente
      if ( this.content as RawDropdownComponent ) {
        // Obtenemos el componente dropdown que vamos a mostrar
        // y que tenemos referenciado a traves del atributo de entrada 'content'
        const dropdown: RawDropdownComponent = this.executeDropdownAction('show');
        dropdown.setTriggerDropdown = this;
      }// If
      // Ponemos como visible
      this.visible = true;
      // Notificamos al esterior que el componente
      // se esta visualizando actualmente
      this.onShown.emit( this );
    }// if
  }// Show




  /**
   * @public
   * @method
   * @description
   * Método encargado de ocultar el componente
   * dropdown en la vista.
   */
  public hide() {
    if ( this.visible ) {

      // Ocultamos el dropdown
      this.executeDropdownAction('hide');
      // Damos por oculto al dropdown
      this.visible = false;
      // Notificamos al exterior que el componente
      // esta oculto actualmente
      this.onHidden.emit( this );

    }// if
  }// Hide




  /**
   * @public
   * @method
   * @description
   * Método que retorna el nativeElement
   * del elemento donde esta propia directiva
   * se encuentra alojada.
   */
  public getElement() {
    return this.viewContainerRef.element.nativeElement;
  }// GetElement


}// DropdownTriggerDirective
