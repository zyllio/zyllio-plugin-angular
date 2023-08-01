import { Component, ElementRef, Injector, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PropertyValueModel, StaticPropertyValueModel } from '@zyllio/zy-sdk';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    BrowserModule
  ],
})
export class AppComponent implements OnChanges {

  counter = 0

  @Input('data-value')
  set dataValue(propertyValue: object) {

    console.log("pv ", propertyValue);

    const value = (propertyValue as StaticPropertyValueModel).value
 console.log("value ", value);

    this.counter = parseInt(value)
  }


  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    // this.counter = zySdk.services.component.getPropertyValueAsText(this.elementRef.nativeElement, 'value')
  }

}
