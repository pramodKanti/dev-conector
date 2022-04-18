import { Component, Input, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Experince } from 'src/app/modal/experince';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input('experiences') experiences: Experince[];
  constructor(
    private http: HttpService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  onDelete(id: string) {
    this.http.deleteExperience(id).subscribe((response) => {
      console.log(response);
      this.experiences = response.experience;
      this.flashMessage.show('experience remove Successful!', {
        cssClass: 'alert-success',
        timeout: 5000,
      });
    });
  }
}
