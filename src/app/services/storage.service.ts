import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favourites: Post[] = [];

  constructor() {
    if (localStorage.getItem('favourites')) {
      this.favourites = JSON.parse(localStorage.getItem('favourites')!)   // ! diciamo "sono certo che qui non sarà nullo"
    }
  }

  savePost(post: Post){
    post.isFavourite = true;
    this.favourites.push(post);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
    console.log(this.favourites)
  }

  removePost(post: Post){
    post.isFavourite = false;
    this.favourites = this.favourites.filter(p => p.id !== post.id);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
    console.log(this.favourites)
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
   return this.favourites.some(p => p.id === post.id);
  }
}
