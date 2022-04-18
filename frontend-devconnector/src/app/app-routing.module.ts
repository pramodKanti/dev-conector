import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddEducationComponent } from './components/dashboard/dashboard-actions/add-education/add-education.component';
import { AddExperienceComponent } from './components/dashboard/dashboard-actions/add-experience/add-experience.component';
import { CreateProfileComponent } from './components/dashboard/dashboard-actions/create-profile/create-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profile/:handle', component: ProfileComponent },
  {
    path: 'create-profile',
    component: CreateProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-education',
    component: AddEducationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-experience',
    component: AddExperienceComponent,
    canActivate: [AuthGuard],
  },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'post-form', component: PostFormComponent, canActivate: [AuthGuard] },
  // {path='posts/:id' , component: PostComponent}
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
