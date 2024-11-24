import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { TimelineMetadata } from './app/metadata';

const run = async () => {
  
  const applicationRef = await createApplication()

  const TimelineComponent = createCustomElement(AppComponent, { injector: applicationRef.injector })

  zySdk.services.registry.registerComponent(TimelineMetadata, TimelineComponent)

}

run()
