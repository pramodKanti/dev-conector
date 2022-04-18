import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input('post') post: Post;
  @Output() removePost: EventEmitter<string> = new EventEmitter();
  userId: string;
  mypost: boolean = false;
  postLiked: boolean;
  userPost: Post;

  constructor(private http: HttpService, private postService: PostService) {}

  ngOnInit() {
    this.userId = this.userId = JSON.parse(
      localStorage.getItem('profile')
    ).user._id;
  }

  onDelete(id: string) {
    this.http.deletePost(id).subscribe((response) => {
      this.removePost.emit(id);
    });
  }

  onLike(id: string) {
    this.http.like(id).subscribe((response) => {
      this.post.likes = response;
      this.postLiked = true;
    });
  }

  onDislike(id: string) {
    this.http.dislike(id).subscribe((response) => {
      this.post.likes = response;
      this.postLiked = false;
    });
  }
}
