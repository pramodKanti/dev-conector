import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpService } from 'src/app/services/http.service';

interface signupValue {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private flashMessage: FlashMessagesService,
    private http: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: signupValue; valid: boolean }) {
    console.log('Submit');
    if (!valid) {
      this.flashMessage.show('fill Form Correctoly!', {
        cssClass: 'alert-danger',
        timeout: 5000,
      });
    } else {
      if (value.password1 !== value.password2) {
        this.flashMessage.show('Password does not match', {
          cssClass: 'alert-danger',
          timeout: 5000,
        });
      } else {
        this.http.signup(value).subscribe(
          (response) => {
            console.log(response);
            this.flashMessage.show('Succesfully Created!', {
              cssClass: 'alert-success',
              timeout: 5000,
            });
            this.router.navigate(['/login']);
          },
          (error) => {
            console.log(error.error.email);
            this.flashMessage.show(error.error.email, {
              cssClass: 'alert-danger',
              timeout: 5000,
            });
          }
        );
      }
    }
  }
}
