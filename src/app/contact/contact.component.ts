import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  options: FormGroup;
  teamEmail: string = 'webofthrones@gmail.com';
  snackbarDurationInSeconds: number = 3;

  constructor(fb: FormBuilder, public snackbar: MatSnackBar) { 
    this.options = fb.group({
      fontSize: [16, Validators.min(10)],
    });

  }

  openContactSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  ngOnInit() {
  }

  sendMessage() {
    /* This'll be filled in with a function to send the message typed to teamEmail */
    this.openContactSnackbar('Message sent!', '');
  }

}
