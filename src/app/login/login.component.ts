import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({templateUrl: 'login.component.html',
            selector: 'app-login',
            styleUrls: ['login.component.css']})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public snackbarDurationInSeconds: number = 3;

    constructor(
        public snackbar: MatSnackBar,
        private authService: AuthenticationService,
    ) { }

    openLoginSnackbar(message: string, action: string) {
        this.snackbar.open(message, action, {
            duration: this.snackbarDurationInSeconds * 1000,
        });
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }

    /* Make sure form is valid */
    public checkLogin(loginFormValue) {
        if (this.loginForm.valid) {
            this.executeLogin(loginFormValue);
        }
    }

    /* Execute login on backend */
    public executeLogin(loginFormValue) {
        /* Mock user until we connect firebase */ 
        if (loginFormValue.email == 'admin' && loginFormValue.password == 'admin000') {
            this.openLoginSnackbar('Login Successful!', '');
        } else {
            this.openLoginSnackbar('Login Failed!', '');
        }
    }
}
