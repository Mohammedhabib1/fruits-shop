import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { HomeService } from '../all-service/home.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [ReactiveFormsModule,RouterModule,CommonModule,HttpClientModule],
  providers: [HomeService],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      name: [''],
      
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.homeService.signup(this.signupForm.value).subscribe(() => {
        this.snackbar.open('Signup successful! Please login.', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/login']);
      });
    }
  }

}
