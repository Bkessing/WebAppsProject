import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '@app/auth.service';

@Component({templateUrl: 'register.component.html',
            selector: 'app-register',
            styleUrls: ['register.component.css']})

export class RegisterComponent implements OnInit {
    public registerForm: FormGroup;
    public snackbarDurationInSeconds: number = 3;

    constructor(
        public authService: AuthService,
        public snackbar: MatSnackBar,
    ) { }

    openRegisterSnackbar(message: string, action: string) {
        this.snackbar.open(message, action, {
            duration: this.snackbarDurationInSeconds * 1000,
        });
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        })
    }

    /* Return any errors present in the register form */
    public hasError(controlName: string, errorName: string) {
        return this.registerForm.controls[controlName].hasError(errorName);
    }

    /* Execute registration on Firebase */
    public tryRegister(registerFormValue) {
        if (this.registerForm.valid) {
            this.authService.register(registerFormValue)
            .then(res => {
                /* Show success notif */
                this.openRegisterSnackbar('Account registered successfully!', '');
            }, err => {
                // console.log(err);
                this.openRegisterSnackbar(err.message, '');
            })
        }
    }
}
