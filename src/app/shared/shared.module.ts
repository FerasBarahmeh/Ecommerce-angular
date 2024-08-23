import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {FormsModule} from "@angular/forms";
import {ErrorComponent} from "./error/error.component";
import {ErrorsComponent} from "./errors/errors.component";

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ErrorComponent,
    ErrorsComponent,
  ],
  exports: [
    ButtonComponent,
    FormsModule,
    ErrorComponent,
    ErrorsComponent,
  ],
})
export class SharedModule { }
