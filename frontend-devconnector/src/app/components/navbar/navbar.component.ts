import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  userId: string;

  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.userId = this.postService.getUserID();

    this.authService.isAuthenticated.subscribe((auth) => {
      this.isAuthenticated = auth;
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    this.authService.isAuthenticated.subscribe((auth) => {
      this.isAuthenticated = auth;
    });
    this.authService.logout();
  }
}
