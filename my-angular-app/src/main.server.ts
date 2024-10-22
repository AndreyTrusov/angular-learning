import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/core/configs/app.component';
import { config } from './app/core/configs/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
