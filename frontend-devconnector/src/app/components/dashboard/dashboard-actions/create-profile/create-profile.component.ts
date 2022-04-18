import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CreateProfile } from 'src/app/modal/createProfile';
import { HttpService } from 'src/app/services/http.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: CreateProfile = {
    status: '',
    company: '',
    website: '',
    location: '',
    skills: [],
    handle: '',
    bio: '',
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    instagram: '',
  };

  showsocial: boolean = false;
  isEdit = false;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private http: HttpService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profileService.profile.subscribe((profile) => {
      if (profile) {
        this.isEdit = true;
        this.profile = profile;
      }
    });
  }

  onSubmit({ value, valid }: { value: CreateProfile; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('fill Form Correctoly!', {
        cssClass: 'alert-danger',
        timeout: 5000,
      });
    } else {
      this.http.createProfile(value).subscribe(
        (response) => {
          console.log(response);
          this.flashMessage.show('Succesfully Created!', {
            cssClass: 'alert-success',
            timeout: 5000,
          });
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.flashMessage.show(error.error.handle, {
            cssClass: 'alert-danger',
            timeout: 5000,
          });
          console.log(error);
        }
      );
    }
  }
  socialHandler() {
    this.showsocial = !this.showsocial;
  }
}
