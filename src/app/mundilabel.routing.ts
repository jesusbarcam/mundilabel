import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutAsComponent } from './components/about-as/about-as.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';



const mundilabelRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent },
  {path: 'about', component: AboutAsComponent  },
  {path: 'howwework', component: HowWeWorkComponent },
  {path: '**', pathMatch: 'full', component: UnknowPageComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( mundilabelRoutes ) ],
  exports: [ RouterModule ]
})
export class MundilabelRouting {
}// MundilabelRouting
