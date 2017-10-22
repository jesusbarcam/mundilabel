import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  RawDropdownComponent, RawDropdownTriggerDirective, RawSidebarComponent
} from './components';


import {
  RawStopScrollDirective
} from './directives';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],

  declarations: [
    RawDropdownComponent,
    RawDropdownTriggerDirective,
    RawSidebarComponent,
    RawStopScrollDirective
  ],

  exports: [
    RawDropdownComponent,
    RawDropdownTriggerDirective,
    RawSidebarComponent,
    RawStopScrollDirective
  ],

  providers: [
  ],
})
export class RawMaterialModule {
}// RawMaterialModule
