import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone:true
})
export class Login  implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor( private route:Router) { }

  ngOnInit(): void {
  }

    email = '';
  password = '';

  onSubmit() {
    console.log('Login submitted:', this.email, this.password);
    this.route.navigate(['/home']);
  }
  // onSubmit(): void {
  //   const { username, password } = this.form;

    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });
  // }

  reloadPage(): void {
    window.location.reload();
  }

}
