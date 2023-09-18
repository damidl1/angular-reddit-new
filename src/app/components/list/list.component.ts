import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  constructor(private reddit: RedditService){

  }
  ngOnInit(): void {
    this.reddit.getRedditPosts().subscribe(childrenData => console.log('childrenData',childrenData));
  }

}
