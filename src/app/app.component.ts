import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnChanges {
  
  @Input('data-value') dataValue!: string

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  
  async getCounter() {    
    return await zySdk.services.component.getPropertyValueAsText(this.elementRef.nativeElement, 'value')
  }
}
