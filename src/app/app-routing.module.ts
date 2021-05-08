import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  // to optimize lazy loading
  // when use lazy loading, there is a tiny delay  everytime a visit a route
  // to load particular module. to avoid this,
  // setting following property will preload the modules which will be needed later
  // ofcourse the route which is hit first, is loaded first
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
