import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Apontando para o arquivo certo

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
