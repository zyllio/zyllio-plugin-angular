import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListColumnItemModel, ListColumnItemsModel, ListItemModel } from '@zyllio/zy-sdk';

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
  
  @Input() data!: ListColumnItemsModel
  
  @Input() selection: ListColumnItemModel | undefined 
  
  @Output() selected = new EventEmitter<{ selection: ListItemModel }>()
  
  @Output() clicked = new EventEmitter<void>()
  
  select(selection: ListItemModel) {

    this.selection = selection

    this.selected.emit({ selection })

    this.clicked.emit()
  }
}
