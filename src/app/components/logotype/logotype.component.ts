import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { MundilabelRoutes } from '../../mundilabel.routing';

@Component({
  selector: 'logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogotypeComponent implements OnInit {


  @Input()
  private urlLogotype: string;


  constructor(private router: Router) {
  }// Constructor



  ngOnInit() {
  }// NgOnInit



  /**
   * @method
   * @public
   * @description
   */
  public navigationTo(indexRoutes: number) {
    const urlRoute: string = MundilabelRoutes[indexRoutes].path;
    this.router.navigateByUrl( urlRoute );
  }// NavigationTo



}// LogotypeComponent
