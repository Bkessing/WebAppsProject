import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '@app/_services';
import { MatSnackBar } from '@angular/material';

@Component({templateUrl: 'register.component.html',
            selector: 'app-register',
            styleUrls: ['register.component.css']})

export class RegisterComponent implements OnInit {
    public registerForm: FormGroup;
    public snackbarDurationInSeconds: number = 3;

    constructor(
        public snackbar: MatSnackBar,
        private authService: AuthenticationService,
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
            username: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        })
    }

    /* Return any errors present in the register form */
    public hasError(controlName: string, errorName: string) {
        return this.registerForm.controls[controlName].hasError(errorName);
    }

    /* Make sure form is valid */
    public checkRegister(registerFormValue) {
        if (this.registerForm.valid) {
            this.executeRegister(registerFormValue);
        }
    }

    /* Execute registration on backend */
    public executeRegister(registerFormValue) {
        this.openRegisterSnackbar('Account registered successfully!', '');
    }
}
