import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { Router, RouterLink, RouterModule } from '@angular/router';
import { Response, ResponseStatus } from '../model/Response';
import { HomeService } from '../all-service/home.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule,RouterLink,RouterModule],

  providers: [HomeService],
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.homeService.login(this.loginForm.value).subscribe((resp: Response<any>) => {
        console.log(resp);
        console.log(resp.status == ResponseStatus.SUCCESS);
        if (resp.status == ResponseStatus.SUCCESS) {
          // localStorage.setItem('token', JSON.stringify(resp.data));
          sessionStorage.setItem('user', JSON.stringify(resp.data));
          this.router.navigate(['/home']);
        }
      });
    }

    
  }
}









// =====================================
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../../services/auth/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit{
//   loginForm: FormGroup;

//   constructor(
//     private authService: AuthService,
//     private rourter: Router,
//     private formBuilder: FormBuilder
//   ) {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//     });
//   }

//   ngOnInit() {}

//   login() {
//     // if (this.loginForm.valid) {
//     //   // Perform login action here using form values:
//     //   const formValues = this.loginForm.value;
//     //   this.authService.login(formValues).subscribe((res: LoginResponse) => {
//     //     sessionStorage.setItem('rs-token', res.accessToken as string);
//     //     this.rourter.navigate(["/"]);
//     //   });
//     //   // E.g., calling an ausubscribetication service
//     //   // authService.login(formValues.userIdEmail, formValues.password);
//     // } else {
//     //   // Handle form validation errors here if needed
//     // }
//     sessionStorage.setItem('rs-token', "asdfghjkl");
//     this.rourter.navigate(["/dashboard"]);
//   }

// }
