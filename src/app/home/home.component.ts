import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../auth/signup/signup.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';
import { LoginComponent } from '../auth/login/login.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.checkToken().subscribe(
      (response: any) => {
        this.router.navigate(['/cafe/dashboard']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
  // ngOnInit(): void {
  //   if (localStorage.getItem('token') != null) {
  //     this.userService.checkToken().subscribe(
  //       (response: any) => {
  //         this.router.navigate(['/cafe/dashboard']);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }

  handleSignupAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(SignupComponent, dialogConfig);
  }

  handleForgotPassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

  handleLoginAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(LoginComponent, dialogConfig);
  }
}
