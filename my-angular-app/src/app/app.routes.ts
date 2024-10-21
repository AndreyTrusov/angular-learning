import {ResolveFn, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        title: 'About component',
        component: AboutComponent,
      },
      {
        path: 'child-b',
        title: 'Home component',
        component: HomeComponent,
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
