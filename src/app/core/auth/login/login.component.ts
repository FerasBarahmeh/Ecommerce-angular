import {Component} from '@angular/core';
import {AppComponent} from "../../../layouts/App/app.component";
import {IMAGES_CONSTANTS} from "../../../constants/images";
import {SharedModule} from "../../../shared/shared.module";
import {NgForm} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AuthService} from "../../../services/auth/auth.service";
import {ILogin} from "../../../interfaces/ILogin";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppComponent, SharedModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent
{
  public sideImage: string = IMAGES_CONSTANTS.AUTH + 'side-img.png';

  public loginInfo: { email: string, password: string } = {email: '', password: ''};

  public login(LoginForm: NgForm): void
  {
    const LoginData: ILogin = {
      email: LoginForm.controls['email'].value,
      password: LoginForm.controls['password'].value,
    };
    AuthService.login(LoginData);
  }
}
