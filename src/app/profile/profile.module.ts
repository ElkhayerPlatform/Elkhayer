import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { PostsUserComponent } from './components/posts-user/posts-user.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSectionComponent,
    PostsUserComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class ProfileModule { }
