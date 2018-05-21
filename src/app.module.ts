import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Login } from './login';
import { App } from './app';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [
    Login, App
  ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
  ]
})
export class AppModule {}
