import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'top-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit() {
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    // setTimeout(() => { this.router.navigate(['']); }, 500);
    this.router.navigate(['']);
    
    return false;
  }

}
