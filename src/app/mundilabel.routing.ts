import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationComponent } from './components/location/location.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';



export const MundilabelRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutUsComponent  },
  {path: 'howwework', component: HowWeWorkComponent },
  {path: 'location', component: LocationComponent },
  {path: 'contact', component: ContactComponent },
  {path: '**', component: UnknowPageComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot( MundilabelRoutes ) ],
  exports: [ RouterModule ]
})

export class MundilabelRouting {
}// MundilabelRouting
