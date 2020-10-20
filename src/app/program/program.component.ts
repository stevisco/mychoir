import { Component, OnInit } from '@angular/core';
import { Program } from './program.model';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../song/song.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  program: Program;
  id: String;

  constructor(private route: ActivatedRoute,private songService:SongService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (!(this.id)) this.id = "";
    this.program=new Program("Loading...","","");
    this.songService.getProgram(this.id).subscribe(
        (data) => { 
            this.program = data; 
            this.readsummary();
        },
        (error) => console.log(error)
    );

  }


  readsummary() {
    if (this.program.jsonSummary){
        try{
            //console.log(this.program.jsonSummary);
            let obj = JSON.parse(this.program.jsonSummary);
            //let list = obj["list"];
            this.program.entries = obj["list"];
            //console.log(list);
            /*for (let i = 0;i<list.length;i++) {
                let entry = list[i];
                console.log(entry["position"]);
            }*/
        } catch (e){
                console.log(e);
        }
    }
}

}
