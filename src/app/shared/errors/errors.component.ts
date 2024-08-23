import {Component, Input} from '@angular/core';
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'errors',
  standalone: true,
  imports: [
    ErrorComponent
  ],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent
{
  @Input() fieldName!: string;

  @Input() hasErrors: boolean = false;

  @Input() errorMessages: string[] = [];
  protected readonly console = console;
}
