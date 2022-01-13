import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AuthFacade } from '../../form-builder/store/auth/facades/auth.facade';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private authFacade: AuthFacade,
    private router: Router
  ) {
  }

  public canActivate(): boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.authService.loggedInState) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
