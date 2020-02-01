import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

//Market Component
//fetch user submissions and display details in seperate view 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  posts: Post[];
  loadedPosts: Post[];
  itemIsAvailable: boolean;

  constructor(private router: Router, private postService: PostsService) {
    // api call initialize
    this.posts = [];
    this.loadedPosts = [];
    this.itemIsAvailable = false;

    postService.getPosts().subscribe(response => {
      this.posts = (response as any).data.map(post => {
        console.log(post);
        return new Post(
          post.id,
          post.attributes.name,
          post.attributes.game,
          post.attributes.condition_score,
          post.attributes.description,
          post.attributes.price,
          post.attributes.created_on,
          '../../assets/icon/favicon.png'
        );
      });
      this.loadedPosts = this.posts;
    });
  }
  ngOnInit() {

  }

  initializePosts() {
    // api call for update on search
    this.posts = this.loadedPosts;
  }
  getItems(event: any) {
    this.initializePosts();
    const value = event.target.value;

    if (value && value.trim() !== '') {
      this.itemIsAvailable = true;
      this.posts = this.posts.filter((post) => {
        return (post.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
    }
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (this.posts.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
  showDetails(event) {
    //alert(event);
    this.router.navigateByUrl('tabs/tab2/info/' + event);
  }
}
