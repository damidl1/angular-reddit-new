import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favouritesSubject = new BehaviorSubject<Post[]>([]);    // subject normale vuota e non può essere inizializzata finchè non ci viene messo un valore, behaviorSubject ha sempre un valore di default, ReplaySubject è in grado di ricordare tutti i valori precedenti che ha avuto

  // favourites: Post[] = [];

  constructor() {
    if (localStorage.getItem('favourites')) {
      // this.favourites = JSON.parse(localStorage.getItem('favourites)!)
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('favourites')!))   //quando voglio cambiare un valore si usa next(), che significa 'il tuo prossimo valore sarà questo'
         // ! diciamo "sono certo che qui non sarà nullo"

    }
  }

  savePost(post: Post){
    post.isFavourite = true;
    // this.favourites.push(post);
    // localStorage.setItem('favourites', JSON.stringify(this.favourites));
    const actualArray = this.favouritesSubject.value; //apro la scatola e prendo quello che c'è dentro l'array
    const newArray = [...actualArray, post] // ... prendi il vecchio array e aprilo in uno nuovo
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  removePost(post: Post){
    post.isFavourite = false;
    // this.favourites = this.favourites.filter(p => p.id !== post.id);
    // localStorage.setItem('favourites', JSON.stringify(this.favourites));
    // console.log(this.favourites)
    const actualArray = this.favouritesSubject.value;
    const newArray = actualArray.filter((p) => p.id !== post.id);
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  toggleFavourites(post: Post){
    if (this.isFavourite(post)) {
      this.removePost(post)
    } else {
      this.savePost(post);
    }
  }

  isFavourite(post: Post): boolean {
   console.log('is favourite', post)
   return this.favouritesSubject.value.some(p => p.id === post.id);
  }
}
