import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input()
  post!: Post;
  constructor(public postService: PostService) {}

  deleteTask(post: Post) {
    if (confirm('¿Estás seguro de eliminar esta publicacion? Recuerda, no podrá recurarse después')) {
      this.postService.deletePost(post);
    }
  }
}
