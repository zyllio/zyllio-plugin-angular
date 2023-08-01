import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { CounterMetadata } from './app/metadata';

const run = async () => {
  
  const applicationRef = await createApplication()

  const CounterComponent = createCustomElement(AppComponent, { injector: applicationRef.injector })

  zySdk.services.registry.registerComponent(CounterMetadata, CounterComponent)

}

run()
