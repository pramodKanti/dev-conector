import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Education } from 'src/app/modal/educatiobn';
import { Experince } from 'src/app/modal/experince';
import { Profile } from 'src/app/modal/profile';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile: Profile = {
    bio: '',
    company: '',
    date: '',
    education: [],
    experience: [],
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
  @Output() experiences: Experince[] = [];
  @Output() educations: Education[] = [];
  isLoading: boolean = false;

  constructor(
    private http: HttpService,
    private router: Router,
    private postService: PostService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.http.getProfile().subscribe(
      (response) => {
        this.profile = response;
        localStorage.setItem('profile', JSON.stringify(response));
        this.experiences = response.experience;
        this.educations = response.education;
        this.isLoading = false;
        this.postService.getProfile(response);
        this.profileService.profile.next(response);
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  onDelete() {
    this.http.deleteProfile().subscribe((response) => {
      console.log(response);
      this.flashMessage.show('Account Delete Successful!', {
        cssClass: 'alert-success',
        timeout: 5000,
      });
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
      this.authService.isAuthenticated.next(false);
      this.router.navigate(['/login']);
    });
  }
}
