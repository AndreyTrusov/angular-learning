import { ApplicationConfig, provideZoneChangeDetection, Injectable } from '@angular/core';
import {provideRouter, withComponentInputBinding, RouterStateSnapshot, TitleStrategy} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}]
};
