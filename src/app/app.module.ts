import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { MaterialModule } from "./shared.module/material.module"
import { AppNavComponent } from './common/nav.component';
import { APP_ROUTES } from './app.routes';
import { PageNotFoundComponent } from './common/pagenotfound.component';
import { HomeComponent } from './common/home.component';
import { WindowRef } from './common/window.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
