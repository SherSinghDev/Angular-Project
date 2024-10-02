import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfige from './app/routes'
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
