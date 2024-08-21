import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {ErrorComponent} from "../../../shared/error/error.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    ErrorComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit
{
  constructor(private authService: AuthService, private router: Router)
  {
  }

  private _logout(): void
  {
    AuthService.logout();
    this.router.navigate(['login']).then(r => console.log('your logged in', r));
  }
  ngOnInit()
  {
    this._logout();
  }
}
