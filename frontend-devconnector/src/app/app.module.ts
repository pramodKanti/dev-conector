import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateProfileComponent } from './components/dashboard/dashboard-actions/create-profile/create-profile.component';
import { AddEducationComponent } from './components/dashboard/dashboard-actions/add-education/add-education.component';
import { AddExperienceComponent } from './components/dashboard/dashboard-actions/add-experience/add-experience.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/dashboard/education/education.component';
import { ExperienceComponent } from './components/dashboard/experience/experience.component';
import { DashboardActionsComponent } from './components/dashboard/dashboard-actions/dashboard-actions.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostItemComponent } from './components/posts/post-item/post-item.component';
import { CommentItemComponent } from './components/posts/comment-item/comment-item.component';
import { CommentFormComponent } from './components/posts/comment-form/comment-form.component';
import { PostComponent } from './components/posts/post/post.component';
import { SkillComponent } from './components/profiles/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,

    HomeComponent,
    DashboardComponent,
    ProfilesComponent,
    ProfileComponent,
    CreateProfileComponent,
    AddEducationComponent,
    AddExperienceComponent,
    PageNotFoundComponent,
    EducationComponent,
    ExperienceComponent,
    DashboardActionsComponent,
    SpinnerComponent,
    PostsComponent,
    PostFormComponent,
    PostItemComponent,
    CommentItemComponent,
    CommentFormComponent,
    PostComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
