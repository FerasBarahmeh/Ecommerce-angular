import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/layouts/App/app.config';
import { AppComponent } from './app/layouts/App/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
