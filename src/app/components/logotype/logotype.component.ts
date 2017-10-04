import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogotypeComponent implements OnInit {

  @Input()
  private urlLogotype: string;

  constructor() { }// Constructor

  ngOnInit() {
  }// NgOnInit

}// LogotypeComponent
