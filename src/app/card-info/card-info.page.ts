import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';
//segmented view to see post details/trollandtoad price info via graph
@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.page.html',
  styleUrls: ['./card-info.page.scss'],
})
export class CardInfoPage implements OnInit {
  cardId = null;
  post: Post;
  switchCase: any;
  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    this.cardId = this.activatedRoute.snapshot.paramMap.get('id');
    this.postsService.findPost(this.cardId).subscribe(response => {
      this.post = {
        id: (response as any).data.id,
        name: (response as any).data.attributes.name,
        game: (response as any).data.attributes.game,
        condition: (response as any).data.attributes.condition_score,
        description: (response as any).data.attributes.description,
        price: (response as any).data.attributes.price,
        created: (response as any).data.attributes.created_on,
        imageUrl: '../../assets/icon/favicon.png'
      };
    });
    this.switchCase = 'details';
  }

  ngOnInit() { }

  segmentChanged(event) {
    this.switchCase = event.detail.value;
    console.log(this.switchCase);
  }
}
