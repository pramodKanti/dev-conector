import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Experince } from 'src/app/modal/experince';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {
  experience: Experince = {
    title: '',
    company: '',
    location: '',
    from: '',
    current: false,
    to: '',
    description: '',
  };

  constructor(
    private http: HttpService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Experince; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('fill Form Correctoly!', {
        cssClass: 'alert-danger',
        timeout: 5000,
      });
    } else {
      this.http.addExperience(value).subscribe(
        (response) => {
          console.log(response);
          this.flashMessage.show('Succesfully Created!', {
            cssClass: 'alert-success',
            timeout: 5000,
          });
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
