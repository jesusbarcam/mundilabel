import { NgModule } from '@angular/core';

import { RawDropdownComponent, RawDropdownTriggerDirective } from './components';



@NgModule({

  declarations: [
    RawDropdownComponent,
    RawDropdownTriggerDirective
  ],

  exports: [
    RawDropdownComponent,
    RawDropdownTriggerDirective
  ],

  providers: [
  ],
})
export class RawMaterialModule {
}// RawMaterialModule
