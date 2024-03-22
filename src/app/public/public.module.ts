import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HorizontalScrollPostsComponent} from "./components/horizontal-scroll-posts/horizontal-scroll-posts.component";
import {ShowPostComponent} from "./components/posts/show-post/show-post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {HomeComponent} from "./components/home/home.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {DashboardAdminComponent} from "./components/dashboard-admin/dashboard-admin.component";
import {PostsListComponent} from "./components/dashboard-admin/posts-list/posts-list.component";
import {UsersListComponent} from "./components/dashboard-admin/users-list/users-list.component";
import {NavBarAdminComponent} from "./components/dashboard-admin/nav-bar-admin/nav-bar-admin.component";
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    PostsComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    DashboardAdminComponent,
    PostsListComponent,
    UsersListComponent,
    NavBarAdminComponent,
    ShowPostComponent,
    HorizontalScrollPostsComponent,
    HeaderComponent,
    PublicComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class PublicModule { }
