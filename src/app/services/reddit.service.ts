import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }  // standard da fare sempre quando si fanno chiamate web su angular

  getRedditPosts(){

    return this.http.get<Post>('https://www.reddit.com/r/italy/new.json').pipe(     //dentro pipe mettiamo tutte le funzioni di manipolazione (come prima quando usavamo tanti then)

      // tap(redditObj => console.log('oggetto completo', redditObj)),     // tap serve per fare i console log
      map((redditObj: any) => redditObj.data),     // map funzione simile a quella deglia array ma che lavora solo sul dato che gli arriva
      // tap(redditData => console.log('oggetto data', redditData)),
      map(redditData => redditData.children),
      // tap(redditChildren => console.log('children', redditChildren)),
      map(redditChildren => redditChildren.map((child: any) => child.data))  // qui dentro map usiamo il map dell'array per selezionare il data di ogni child
    );

  }


}
