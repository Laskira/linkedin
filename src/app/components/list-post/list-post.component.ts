import { Component } from '@angular/core';
import { Post } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent {
  public posts: Post[] = [];
  public ordenarBtn = true;

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();

    
  }

  addPost(post: Post) {
    this.postService.addPost(post);
  }

  public cambiarOrder(){
    if(this.ordenarBtn !== true){
      this.posts.sort((a, b) => {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      });
      console.log(this.posts)
      this.ordenarBtn = false
    }else{
      this.ordenarBtn = true
      this.posts.sort((a, b) => {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      });
      console.log(this.posts)
    }
  }

  
}
