import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss']
})
export class LogotypeComponent implements OnInit {

  @Input()
  private urlLogotype: string;

  constructor() { }// Constructor

  ngOnInit() {
  }// NgOnInit

}// LogotypeComponent
