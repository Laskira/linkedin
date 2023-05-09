import { Injectable } from '@angular/core';
import { Post } from '../models/Posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  constructor() {}

  getPosts() {
    const postsFromLocalStorage = localStorage.getItem('posts');
    if (postsFromLocalStorage === null) {
      this.posts = [];
    } else {
      this.posts = JSON.parse(postsFromLocalStorage);
    }
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.push(post);

    let posts: Post[] = [];
    const postsFromLocalStorage = localStorage.getItem('posts');
    if (postsFromLocalStorage === null) {
      posts.push(post);
      console.log(posts);
    } else {
      posts = JSON.parse(postsFromLocalStorage);
      posts.push(post);
    }
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  deletePost(post: Post) {
    for (let i = 0; i < this.posts.length; i++) {
      if (post == this.posts[i]) {
        this.posts.splice(i, 1);
        localStorage.setItem('posts', JSON.stringify(this.posts));
      }
    }
  }
}
