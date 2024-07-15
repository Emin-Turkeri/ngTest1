import { Routes } from '@angular/router';
import { TestComponent } from '../test/test.component';

export const routes: Routes = [
  {
    path: 'dest',
    component: TestComponent,
    title: 'Dest page'
  }
];

export default routes;
