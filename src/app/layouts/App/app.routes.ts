import {Routes} from '@angular/router';
import {LoginComponent} from "../../core/auth/login/login.component";
import {RegisterComponent} from "../../core/auth/register/register.component";

export const routes: Routes = [
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },

];

