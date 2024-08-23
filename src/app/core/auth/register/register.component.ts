import {Component} from '@angular/core';
import {IMAGES_CONSTANTS} from "../../../constants/images";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {IRegisterFormControl} from "../../../interfaces/form-controls/IRegisterFormControl";
import {JsonPipe} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {IsMatch} from "../../../validators/isMatch";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    JsonPipe
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent
{
  public readonly sideImage: string = IMAGES_CONSTANTS.AUTH + 'side-img.png';

  public registerForm: FormGroup;

  public get password()
  {
    return this.registerForm.controls['password'];
  }

  public get confirmPassword()
  {
    return this.registerForm.controls['confirmPassword'];
  }

  public constructor()
  {
    this.registerForm = this._GetFormStructure()
  }

  private _GetFormStructure(): FormGroup<IRegisterFormControl>
  {
    return new FormGroup<IRegisterFormControl>({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required,])
    }, {updateOn: 'blur', validators: IsMatch('password', 'confirmPassword')});
  }

  public isValidField(fieldName: string): boolean
  {
    const control = this.registerForm.get(fieldName);
    return control?.errors == null;
  }

  public isNotValidField(fieldName: string): boolean
  {
    return !this.isValidField(fieldName);
  }

  public getFieldErrors(fieldName: string): string[]
  {
    const control = this.registerForm.get(fieldName);

    if (!control?.dirty) return [];
    const errors: ValidationErrors | null = control?.errors;

    const messages: string[] = [];

    if (errors?.['required']) messages.push(`${fieldName} is required`);
    if (errors?.['email']) messages.push(`${fieldName} is invalid`);
    if (errors?.['minlength'] && errors?.['minlength']['actualLength'] < errors?.['minlength']['requiredLength'])
      messages.push(`${fieldName} is short, must be greater than ${errors?.['minlength']['requiredLength']} characters`);
    if (errors?.['mismatch']) messages.push(`confirm password not match with password`);

    return messages;
  }
}
