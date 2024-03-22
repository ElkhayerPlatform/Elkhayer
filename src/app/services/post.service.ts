import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/post.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
  getPostById(id:number):Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }
  getPostsByUserId(userId:number):Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts/user/${userId}`);
  }
  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/posts`,post);
  }
  deletePost(id:number):Observable<any> {
    return this.http.delete(`${environment.apiUrl}/posts/${id}`);
  }
  updatePost(post:Post):Observable<Post> {
    return this.http.put<Post>(`${environment.apiUrl}/posts/${post.id}`,post);
  }
}
