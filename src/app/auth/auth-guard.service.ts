import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router: Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot ): boolean | Promise<boolean> | Observable<boolean>{
        console.log("Navigating to:" +route.url+" as logged: "+this.authService.isLoggedIn());
        if (!this.authService.isLoggedIn())
             this.router.navigate(['/login']);
        return true;  
    }
}