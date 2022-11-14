import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./mainPage/home.component";
import {LibraryComponent} from "./lib/library.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      {
        path: 'home',
        component:  HomeComponent
      },
      {
        path: 'library',
        component:  LibraryComponent
      },
      {
        path: '',
        redirectTo:  'home',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
