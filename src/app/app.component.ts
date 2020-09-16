import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postForm: NgForm;

  error = null;
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  errorSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
    this.errorSubscription = this.postsService.error.subscribe(error=>{
      this.error = error;
    });
  }
  
  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndStore(postData.title, postData.content);
    this.postForm.reset();
  }
  
  onFetchPosts() {
    this.getPosts();
  }

  onClearPosts() {
    this.postsService.deleteAllPosts().subscribe(()=>{
      this.loadedPosts= [];
      
    });
  }

  getPosts(){
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe((posts)=>{
      this.loadedPosts = posts;
      this.isFetching = false;
    },(errorResponse)=>{
      this.isFetching = false;
      this.error = errorResponse.error.error;
    });
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(){
    this.postsService.error.unsubscribe();
  }
}
