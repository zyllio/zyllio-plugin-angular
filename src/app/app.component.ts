import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListItemsModel } from '@zyllio/zy-sdk';

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

  events: ListItemsModel = {  
    labels: [],
    status: 'OK',
    tableId: '6546540',  
    items: [{
      _id: '4',
      date: '2024-02-10',
      label: 'No-Code Meetup Paris'
    }, {
      _id: '5',
      date: '2024-04-01',
      label: 'No-Code Showcase'
    }, {
      _id: '6',
      date: '2024-05-11',
      label: 'No-Code Meetup London'
    }, {
      _id: '3',
      date: '2023-05-23',
      label: 'No-Code Meetup Berlin'
    }, {
      _id: '8',
      date: '2023-11-22',
      label: 'No-Code Meetup Lyon'
    }]
  }
}
