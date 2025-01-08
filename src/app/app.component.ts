import { Component, OnInit, ViewEncapsulation, input, model, output } from '@angular/core';
import { ListColumnItemModel, ListColumnItemsModel } from '@zyllio/zy-sdk';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    console.log("data ", this.data);
  }

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
