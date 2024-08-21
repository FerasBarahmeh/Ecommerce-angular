import {Component} from '@angular/core';
import {IMAGES_CONSTANTS} from "../../../constants/images";
import {ErrorComponent} from "../../../shared/error/error.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ErrorComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent
{
  public readonly sideImage: string = IMAGES_CONSTANTS.AUTH + 'side-img.png';

}
