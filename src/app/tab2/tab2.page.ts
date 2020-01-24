import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Post } from '../post';
import { Router } from '@angular/router';
//Market Component
//fetch user submissions and display details in seperate view 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  posts: Post[];
  itemIsAvailable: boolean;
  test = 'test';
  constructor(private router: Router) {
    //api call initialize
    this.posts = [
      { id: 1, price: 100, title: 'another', description: 'another', imageUrl: '../../assets/icon/favicon.png' },
      { id: 2, price: 200, title: 'unique', description: 'uniqdesc', imageUrl: '../../assets/icon/favicon.png' },
      { id: 3, price: 5, title: 'braindead', description: 'braindead', imageUrl: '../../assets/icon/favicon.png' }
    ];
    this.itemIsAvailable = false;
  }
  initializePosts() {
    //api call for update on search
    this.posts = [
      { id: 1, price: 100, title: 'another', description: 'another', imageUrl: '../assets/icon/favicon.png' },
      { id: 2, price: 200, title: 'unique', description: 'uniqdesc', imageUrl: '../../assets/icon/favicon.png' },
      { id: 3, price: 5, title: 'braindead', description: 'braindead', imageUrl: '../../assets/icon/favicon.png' }
    ];
  }
  getItems(event: any) {
    this.initializePosts();
    const value = event.target.value;

    if (value && value.trim() !== '') {
      this.itemIsAvailable = true;
      this.posts = this.posts.filter((post) => {
        return (post.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
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
