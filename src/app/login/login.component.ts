import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUser: User;
  emailInvalid = false;
  passwordInvalid = false;
  errorMsg = true;
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.emailInvalid = false;
    this.passwordInvalid = false;

    this.currentUser = new User();
    this.currentUser.email = this.loginForm.value.email;
    this.currentUser.password = this.loginForm.value.password;
    this.userService.validateUser(this.currentUser).subscribe((result) => {
      console.log(result);
      if (result === 'Success') {
        this.userService.currentUser = this.currentUser.email;
        this.router.navigate(['home']);
      } else if (result === 'Incorrect email') {
        this.emailInvalid = true;
      } else {
        this.passwordInvalid = true;
      }

    }, error => {
      console.log('ERRORR');
      console.log(error);
      console.log(error.status);
      if (error.status === 404) {
        this.errorMsg = false;
      }
    });

  }

  loginEnter(e) {
    console.log('on enter');
    this.login();
  }

  onKeyEmail() {
    this.emailInvalid = false;
  }

  onKeyPass() {
    this.passwordInvalid = false;
  }

}
