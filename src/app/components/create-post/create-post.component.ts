import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  data!: string;

  constructor(public postServices: PostService) {}

  ngOnInit() {}

  addPost(newData: HTMLInputElement) {
    this.postServices.addPost({
      description: newData.value,
      fecha: new Date(), 
      
    });
    newData.value = '';
    return false;
  }
}
