import { Component, OnInit } from '@angular/core';
import { SongService } from '../song/song.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Program } from '../program/program.model';

@Component({
  selector: 'app-programlist',
  templateUrl: './programlist.component.html',
  styleUrls: ['./programlist.component.css']
})
export class ProgramlistComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private songService:SongService) { }

  programlist: Program[]; 

  ngOnInit() {

    this.songService.getAllPrograms( ).subscribe(
        (data) => { 
            this.programlist = data; 
        },
        (error) => console.log(error)
    );

  }

  

}
