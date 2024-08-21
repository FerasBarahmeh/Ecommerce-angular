import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {FormsModule} from "@angular/forms";
import {ErrorComponent} from "./error/error.component";

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ErrorComponent,
  ],
  exports: [
    ButtonComponent,
    FormsModule,
    ErrorComponent,
  ],
})
export class SharedModule { }
