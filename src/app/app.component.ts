import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    BrowserModule
  ],
})
export class AppComponent {

  @Input() value = 0
}
