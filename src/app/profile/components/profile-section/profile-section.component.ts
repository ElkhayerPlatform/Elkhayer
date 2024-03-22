import {Component, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {Post} from "../../../models/post.model";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {getProfile} from "../../../store/profile/profile.actions";
import {getPostsByUserId} from "../../../store/post/post.actions";
import {getProfileSelector} from "../../../store/profile/profile.selector";
import {getPostsByUserIdSelector} from "../../../store/post/post.selector";

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit{

  profile!: Profile;

  constructor(private store:Store, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.store.dispatch(getProfile({id: id}));

    })
    this.store.select(getProfileSelector).subscribe((data) => {
      this.profile = data;
      console.log(this.profile)
    })

  }

}
