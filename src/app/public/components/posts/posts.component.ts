import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Post} from "../../../models/post.model";
import {loadPosts} from "../../../store/post/post.actions";
import {getPostsSelector} from "../../../store/post/post.selector";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  isClicked: boolean = false;
  posts!: Post[];

    constructor(private store:Store) { }

    ngOnInit(): void {
      this.store.dispatch(loadPosts());
      this.store.select(getPostsSelector).subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      })
    }

  onClick() {
    this.isClicked = !this.isClicked;
  }
}
