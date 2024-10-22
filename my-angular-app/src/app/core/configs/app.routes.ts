import {ResolveFn, Routes} from '@angular/router';
import {FirstComponent} from '../../shared/components/first/first.component';
import {SecondComponent} from '../../shared/components/second/second.component';
import {AboutComponent} from '../../shared/components/about/about.component';
import {HomeComponent} from '../../shared/components/home/home.component';
import {PageNotFoundComponent} from '../../shared/components/page-not-found/page-not-found.component';

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
  {path: 'second-component', component: SecondComponent},
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  {path: 'task', component: AboutComponent},
];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
