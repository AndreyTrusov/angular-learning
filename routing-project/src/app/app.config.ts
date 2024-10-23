import {ApplicationConfig} from "@angular/core";
import {provideRouter, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {ROUTES} from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withComponentInputBinding(), withRouterConfig({
      paramsInheritanceStrategy: 'always' // params are shown also in child routes
    })),
  ]
}
