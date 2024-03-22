import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post.model";
import {Store} from "@ngrx/store";
import {loadPosts} from "../../../store/post/post.actions";
import {getPostsSelector} from "../../../store/post/post.selector";


@Component({
  selector: 'app-horizontal-scroll-posts',
  templateUrl: './horizontal-scroll-posts.component.html',
  styleUrls: ['./horizontal-scroll-posts.component.css']
})
export class HorizontalScrollPostsComponent implements OnInit {

  posts!: Post[];

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.store.select(getPostsSelector).subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    })
  }

}
