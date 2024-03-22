import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Post} from "../../../../models/post.model";
import {ActivatedRoute} from "@angular/router";
import {getPost} from "../../../../store/post/post.actions";
import {getPostSelector} from "../../../../store/post/post.selector";


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit{

  post!: Post;

    constructor(private store:Store, private router:ActivatedRoute) { }

    ngOnInit(): void {
      const postId = this.router.snapshot.params['id'];
      this.store.dispatch(getPost({id:postId}));
      this.store.select(getPostSelector).subscribe((data) => {
        this.post = data;
        console.log(this.post);
      })
    }

}
