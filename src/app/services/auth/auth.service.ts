import {Injectable} from '@angular/core';
import {ILogin} from "../../interfaces/DTOs/ILogin";

@Injectable({
  providedIn: 'root'
})

export class AuthService
{
  private static readonly _authName: string = 'user';

  public static login(data: ILogin): void
  {
    localStorage.setItem(this._authName, JSON.stringify(data));
  }

  public static logout()
  {
    localStorage.removeItem(this._authName);
  }

  public static check(): boolean
  {
    return localStorage.getItem(this._authName) !== null;
  }
}
