import { Component, OnInit } from '@angular/core';
import { Song } from '../song/song.model';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {

  songlist: Song[] = [ new Song('1','mytitle','myauth'),  new Song('2','mytitle2','myauth') ];

  constructor() { }

  
  ngOnInit() {
  }

}
