import { Routes } from '@angular/router';
import { Login } from './login';

export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: '**',     component: Login },
];
