import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopHeaderComponent} from "./top-header/top-header.component";
import {HeaderComponent} from "./header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    TopHeaderComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    TopHeaderComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule { }
