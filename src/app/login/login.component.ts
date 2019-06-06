import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({templateUrl: 'login.component.html',
            selector: 'app-login',
            styleUrls: ['login.component.css']})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(
        private authService: AuthenticationService,
    ) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
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
        if (loginFormValue.username == 'admin' && loginFormValue.password == 'admin000') {
            alert('Login Successful!!');
        } else {
            alert('Login Failed!!');
        }
    }
}
