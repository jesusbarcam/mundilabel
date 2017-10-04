import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }// NgOnInit

}// LocationComponent
