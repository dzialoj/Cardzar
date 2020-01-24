import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.page.html',
  styleUrls: ['./card-info.page.scss'],
})
export class CardInfoPage implements OnInit {
  cardId = null;
  cardimg = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //use this id to find post in database
    this.cardId = this.activatedRoute.snapshot.paramMap.get('id');
    this.cardimg = '../../assets/icon/favicon.png';
  }
}
