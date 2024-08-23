import {FormControl} from "@angular/forms";

export interface IRegisterFormControl
{
  email: FormControl<string | null>;
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
