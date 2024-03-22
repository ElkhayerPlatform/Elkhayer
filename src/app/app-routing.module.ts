import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/components/home/home.component";
import {PostsComponent} from "./public/components/posts/posts.component";
import {ShowPostComponent} from "./public/components/posts/show-post/show-post.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileSectionComponent} from "./profile/components/profile-section/profile-section.component";
import {PostsUserComponent} from "./profile/components/posts-user/posts-user.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: ShowPostComponent },
  { path: 'profile', component: ProfileComponent, children: [
      { path: 'user/:id', component: ProfileSectionComponent },
      { path: 'posts/:id', component: PostsUserComponent },
    ] },
  { path: 'auth', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
