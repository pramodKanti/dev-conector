import { Component, Input, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Education } from 'src/app/modal/educatiobn';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input('educations') educations: Education[];

  constructor(
    private http: HttpService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  onDelete(id: string) {
    this.http.deleteEducation(id).subscribe((response) => {
      console.log(response);
      this.educations = response.education;
      this.flashMessage.show('Education remove Successful!', {
        cssClass: 'alert-success',
        timeout: 5000,
      });
    });
  }
}
