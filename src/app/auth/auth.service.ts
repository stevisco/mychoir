import { SongService } from "../song/song.service";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";
import * as crypto from "crypto-js";


@Injectable()
export class AuthService {

    private loggedin: boolean = false;
    private xauth: string;
    private message:string;

    public getMessage(): string {
        return this.message;
    }
    public setMessage(message:string) {
        this.message=message;
    }

    public setLoggedIn(loggedin:boolean){
        this.loggedin = loggedin;
    }

    constructor(private songService:SongService,private http:HttpClient){

    }

    public login(user:string,password:string) {

        var baseUrl = this.songService.getBaseUrl();
         
        var hash = crypto.SHA256(password).toString(crypto.enc.Hex);

        return   this.http.get<any>(baseUrl+"/auth",{
                 
                headers: {'x-auth-request': user+";"+hash }
        });
        
    }

    public isLoggedIn():boolean{
        return this.loggedin;
    }


}