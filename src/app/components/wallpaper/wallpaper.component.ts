import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WallpaperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }// NgOnInit

}// WallpaperComponent
