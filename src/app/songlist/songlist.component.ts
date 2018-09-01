import { Component, OnInit } from '@angular/core';
import { Song } from '../song/song.model';
import { SongService } from '../song/song.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { SongListFilter } from './songlistfilter.model';
import { Auth } from '../auth.model';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private songService:SongService) { }

  songlist: Song[]; 
  alpha: String[] = [ "Caricamento in corso..."];
  alphasel: String = "";
  sexpr: String = "";
  tag: String = "";
  songlistfilter: SongListFilter = new SongListFilter([""],[""]);
    
  ngOnInit() {
    var a:Auth = new Auth();
    this.alphasel = this.route.snapshot.params['alpha'];
    this.sexpr = this.route.snapshot.params['sexpr'];
    this.tag = this.route.snapshot.params['tag'];

    this.route.params.subscribe(
        (params:Params) => { 
            this.alphasel = params['alpha'];
            this.sexpr=params['sexpr'];
            this.tag=params['tag'];
            this.subScribeUpdate();
        }
    );
    this.subScribeUpdate();
    
  }

  subScribeUpdate(){
    if (this.sexpr) {
      this.songService.getAllSearch(this.sexpr).subscribe(
        (response:Song[]) => { this.updateSongList(response) },
        (error) => {  console.log(error); }
      );
    }
    else if (this.tag){
      this.songService.getAllByTag(this.tag).subscribe(
        (response:Song[]) => { this.updateSongList(response) },
        (error) => {  console.log(error); }
      );
    }
    else {
      this.songService.getAll(this.alphasel).subscribe(
        (response:Song[]) => { this.updateSongList(response) },
        (error) => {  console.log(error); }
      );
    }
  }

  updateSongList(newsongs:Song[]){
    this.songlist = newsongs;
    this.songService.getSongListFilter().subscribe(
        (response:SongListFilter) => { this.songlistfilter = response; },
        (error) => { console.log(error); }
    );
    this.alpha = this.songlist.map(function (val){
         var first:string = val.title.charAt(0);
         return first; 
    });
    this.alpha = this.alpha.filter((el, i, a) => i === a.indexOf(el));
  }

  searchClick() {
    this.router.navigateByUrl('/songssearch/'+this.sexpr);
  }
}
