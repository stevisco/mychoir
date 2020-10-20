import { Component, OnInit } from '@angular/core';
import { Song } from './song.model';
import { ActivatedRoute } from '@angular/router';
import { SongService } from './song.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  song: Song;
  id: String;

  constructor(private route: ActivatedRoute,private songService:SongService,private location:Location) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (!(this.id)) this.id = "";
    this.song=new Song("Loading...","","","",null,null,null,"","","","","","","");
    this.songService.get(this.id).subscribe(
        (data) => { 
            this.song = data; 
            this.song.attachBaseUrl=this.songService.baseUrl; 
            this.song.generateEmbedYoutubeUrl(); 
        },
        (error) => console.log(error)
    );

  }

  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }

}
