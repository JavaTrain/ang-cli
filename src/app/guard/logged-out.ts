import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable()
export class LoggedOutGuard {
  constructor(private userService: UserService) {
  }

  canActivate() {
    return !this.userService.isLoggedIn();
  }
}