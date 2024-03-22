import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {getPostsByUserId} from "../../../store/post/post.actions";
import {getPostsByUserIdSelector} from "../../../store/post/post.selector";
import {Post} from "../../../models/post.model";

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit{

  posts!: Post[];
  isClicked: boolean = false;
  constructor(private store:Store, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(getPostsByUserId({id: id}));
    })
    this.store.select(getPostsByUserIdSelector).subscribe((data) => {
      this.posts = data;
    })
  }

  onClick() {
    this.isClicked = !this.isClicked;
  }

}
