import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '@app/auth.service';
import { Router } from '@angular/router';

@Component({templateUrl: 'login.component.html',
            selector: 'app-login',
            styleUrls: ['login.component.css']})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public snackbarDurationInSeconds: number = 3;

    constructor(
        public snackbar: MatSnackBar,
        public authService: AuthService,
        private router: Router,
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

    /* Try to execute login on backend */
    public tryLogin(loginFormValue) {
        /* Mock user until we connect firebase */ 
        if (this.loginForm.valid) { 
            this.authService.login(loginFormValue)
            .then(res => {
                /* Show success notif */
                this.openLoginSnackbar('Login successful!', '');
                this.router.navigateByUrl('/map');
                
            }, err => {
                // console.log(err);
                this.openLoginSnackbar(err.message, '');
            })
        }
    }
}
