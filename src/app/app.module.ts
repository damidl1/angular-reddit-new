import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';  // da importare per chiamate web

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { UpperCasePipePipe } from './pipes/upper-case-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    FavouritesComponent,
    TimestampToDatePipe,
    UpperCasePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
