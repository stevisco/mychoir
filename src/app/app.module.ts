import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SongComponent } from './song/song.component';
import { SonglistComponent } from './songlist/songlist.component';
import { HeaderComponent } from './header/header.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: SonglistComponent },
  { path: 'songs', component: SonglistComponent }  ,
  { path: 'events', component: EventlistComponent }  ,
  { path: 'song/:id', component: SongComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SonglistComponent,
    HeaderComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
