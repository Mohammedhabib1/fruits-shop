import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    // if (this.loginForm.valid) {
    //   // Perform login action here using form values:
    //   const formValues = this.loginForm.value;
    //   this.authService.login(formValues).subscribe((res: LoginResponse) => {
    //     sessionStorage.setItem('user', res.accessToken as string);
    //     this.rourter.navigate(["/"]);
    //   });
    //   // E.g., calling an ausubscribetication service
    //   // authService.login(formValues.userIdEmail, formValues.password);
    // } else {
    //   // Handle form validation errors here if needed
    // }
    sessionStorage.setItem('user', "asdfghjkl");
    this.router.navigate(["/dashboard"]);
  }

}
