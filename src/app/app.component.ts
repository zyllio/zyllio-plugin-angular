import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListItemModel, ListItemsModel } from '@zyllio/zy-sdk';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    BrowserModule
  ],
})
export class AppComponent implements OnInit {
  
  @Input() data!: ListItemsModel
  
  @Input() selection: ListItemModel | undefined 
  
  @Output() selected = new EventEmitter<{ selection: ListItemModel }>()
  
  @Output() clicked = new EventEmitter<void>()
  
  ngOnInit(): void {
    console.log('selection', this.selection)
    
 console.log("this.data ", this.data);
  }

  select(selection: ListItemModel) {

    this.selection = selection

    this.selected.emit({ selection })

    this.clicked.emit()
  }
}
