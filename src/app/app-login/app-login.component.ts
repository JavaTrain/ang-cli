import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PageDetailComponent } from '../page-detail/page-detail.component';
import { PageFormComponent } from '../page-form/page-form.component';
import { Router }              from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-app-login',
  templateUrl: 'app-login.component.html',
  styleUrls: ['app-login.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [UserService],
})
export class AppLoginComponent {
  public loginForm;

  constructor(
      private userService: UserService,
      private router: Router,
      builder: FormBuilder
  ) { 
  	this.loginForm = builder.group({
      username: ['', [Validators.required, /*validatorFactory('email')*/]],
      password: ['', Validators.required],
    });
  }

  onSubmit(credentials) {
    this.userService.login(credentials.username, credentials.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['list']);
      }
    });
  }

}
