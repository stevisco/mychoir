import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SongComponent } from './song/song.component';
import { SonglistComponent } from './songlist/songlist.component';
import { HeaderComponent } from './header/header.component'; 
import { Routes, RouterModule } from '@angular/router';
import { SongService } from './song/song.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';


const appRoutes: Routes = [
  { path: '', component: SonglistComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent }  ,
  { path: 'songs', component: SonglistComponent, canActivate: [AuthGuard]  }  ,
  { path: 'songs/:alpha', component: SonglistComponent, canActivate: [AuthGuard]  } ,
  { path: 'songssearch/:sexpr', component: SonglistComponent, canActivate: [AuthGuard]  } ,
  { path: 'songsbytag/:tag', component: SonglistComponent, canActivate: [AuthGuard]  } ,
  { path: 'song/:id', component: SongComponent, canActivate: [AuthGuard] }  
];

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SonglistComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SongService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
