/// <reference types="@zyllio/zy-sdk" />

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterMetadata } from './metadata';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(injector: Injector,) {

    const CounterCompoent = createCustomElement(AppComponent, {injector})

    zySdk.services.registry.registerComponent(CounterMetadata, CounterCompoent)
  }

  ngDoBootstrap() {
  }
 }
