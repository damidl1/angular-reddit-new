import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() postData?: Post;
  @Input() isFavourite: boolean = false;
  @Input() bColor: string = 'white';

  constructor(public storage: StorageService){ }
}
