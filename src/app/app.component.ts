import { Component, HostListener } from '@angular/core';
import { WindowRef } from './common/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  windowHeight: number = 880

  constructor(private windowRef: WindowRef) { }

  @HostListener('window:load')
  onLoad() {
    // call our matchHeight function here later        
    this.resetHeight();
  }

  resetHeight() {
    console.log("resetHeight", this.windowRef.nativeWindow.innerHeight)
    this.windowHeight = this.windowRef.nativeWindow.innerHeight * .9
    console.log("windowHeight", this.windowHeight)
  }

  @HostListener('window:resize')
  onResize() {
    // call our matchHeight function here later
    this.resetHeight();
  }
}
