import { Component, ViewEncapsulation, input, model, output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListColumnItemModel, ListColumnItemsModel } from '@zyllio/zy-sdk';

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

  data = input<ListColumnItemsModel>()

  selection = model<ListColumnItemModel | undefined>()

  selected = output<{ selection: ListColumnItemModel }>()

  clicked = output<void>()

  select(selection: ListColumnItemModel) {

    this.selection.set(selection)  

    this.selected.emit({ selection })

    this.clicked.emit()
  }
}
