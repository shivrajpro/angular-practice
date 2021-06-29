import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material/material.module";
import { AppComponent, CustomSnackbarComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DialogComponent } from './dialog/dialog.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';


@NgModule({
  declarations: [AppComponent, CustomSnackbarComponent, DialogComponent, MultiSelectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
