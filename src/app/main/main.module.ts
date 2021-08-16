import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {RouterModule} from "@angular/router";
import {mainRoutes} from "./main.routes";
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    UserModule
  ]
})
export class MainModule { }
