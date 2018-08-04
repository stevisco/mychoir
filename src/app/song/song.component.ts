import { Component, OnInit } from '@angular/core';
import { Song } from './song.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  song: Song;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.song = new Song(this.route.snapshot.params['id'],'ciao','tue');
  }

}
