import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/modal/profile';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    bio: '',
    company: '',
    date: '',
    education: [],
    experience: [],
    social: {
      youtube: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
    },
    githubusername: '',
    handle: '',
    location: '',
    skills: [],
    status: '',
    user: {
      _id: '',
      name: '',
      avatar: '',
    },
    website: '',
    __v: 0,
    _id: '',
  };

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    const handle = this.route.snapshot.params['handle'];

    this.http.getProfileByHandle(handle).subscribe((profile) => {
      this.profile = profile;
    });
  }
}
