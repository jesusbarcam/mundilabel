import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';



const mundilabelRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent },
  {path: 'about', component: AboutUsComponent  },
  {path: 'howwework', component: HowWeWorkComponent },
  {path: '**', pathMatch: 'full', component: UnknowPageComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( mundilabelRoutes ) ],
  exports: [ RouterModule ]
})
export class MundilabelRouting {
}// MundilabelRouting
