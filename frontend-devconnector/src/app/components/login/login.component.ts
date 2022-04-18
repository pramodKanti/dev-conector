import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('fill Form Correctoly!', {
        cssClass: 'alert-danger',
        timeout: 5000,
      });
    } else {
      this.http.login(value).subscribe(
        (response) => {
          console.log(response['token']);
          this.authService.setToken(response['token']);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          if (error.error.password) {
            this.flashMessage.show(error.error.password, {
              cssClass: 'alert-danger',
              timeout: 5000,
            });
          }

          if (error.error.email) {
            this.flashMessage.show(error.error.email, {
              cssClass: 'alert-danger',
              timeout: 5000,
            });
          }
        }
      );
    }
  }
}
