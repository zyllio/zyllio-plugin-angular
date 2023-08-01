import { Component, ElementRef, Injector, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { createCustomElement } from '@angular/elements';
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
export class AppComponent implements OnChanges {
  
  @Input('data-value') dataValue!: string

  counter!: Promise<string>
  
  constructor(private elementRef: ElementRef) {    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.counter = zySdk.services.component.getPropertyValueAsText(this.elementRef.nativeElement, 'value')
  }

}
