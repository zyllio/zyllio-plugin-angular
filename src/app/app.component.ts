import { Component, Input, ViewEncapsulation, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentService } from './component.service';

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

  counter = signal(0)

  @Input('data-value')
  set dataValue(propertyValue: string) {
    this.setValue(propertyValue)
  }

  constructor(private componentService: ComponentService) {
  }

  async setValue(attributeValue: string) {

    const value = await this.componentService.getValueFromAttribute(attributeValue) as string

    this.counter.set(parseInt(value))

  }
}
