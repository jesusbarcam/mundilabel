import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { MundilabelRoutes } from '../../../../mundilabel.routing';


@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorComponent implements OnInit {


  constructor(private router: Router) {
   }// Constructor


  ngOnInit() {
  }// NgOnInit



  /**
   * @method
   * @public
   * @param indexRoute
   * @description
   */
  public navigationTo(indexRoute: number) {
    const nextRoute: string = MundilabelRoutes[ indexRoute ].path;
    this.router.navigateByUrl( nextRoute );
  }// NavigationTo

}// NavigatorComponent
