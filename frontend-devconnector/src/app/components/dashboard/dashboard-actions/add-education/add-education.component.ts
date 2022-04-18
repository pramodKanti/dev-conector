import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Education } from 'src/app/modal/educatiobn';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  education: Education = {
    school: '',
    degree: '',
    fieldofstudy: '',
    fromDate: '',
    current: false,
    toDate: '',
    description: '',
  };

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private http: HttpService
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Education; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('fill Form Correctoly!', {
        cssClass: 'alert-danger',
        timeout: 5000,
      });
    } else {
      this.http.addEducation(value).subscribe(
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
