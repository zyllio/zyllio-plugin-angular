import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { TimelineMetadata } from './app/metadata';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

const run = async () => {

  const applicationRef = await createApplication({
    providers: [provideExperimentalZonelessChangeDetection()]
  })

  const TimelineComponent = createCustomElement(AppComponent, { injector: applicationRef.injector })

  zySdk.services.registry.registerComponent(TimelineMetadata, TimelineComponent)

}

run()
