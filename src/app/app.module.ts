import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SongComponent } from './song/song.component';
import { SonglistComponent } from './songlist/songlist.component';
import { ProgramlistComponent } from './programlist/programlist.component';
import { HeaderComponent } from './header/header.component'; 
import { Routes, RouterModule } from '@angular/router';
import { SongService } from './song/song.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { TextformatPipe } from './textformat.pipe';
import { ProgramComponent } from './program/program.component';


const appRoutes: Routes = [
  { path: '', component: SonglistComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent }  ,
  { path: 'songs', component: SonglistComponent, canActivate: [AuthGuard]  }  ,
  { path: 'songs/:alpha', component: SonglistComponent, canActivate: [AuthGuard]  } ,
  { path: 'songssearch/:sexpr', component: SonglistComponent, canActivate: [AuthGuard]  } ,
  { path: 'songsbytag/:tag', component: SonglistComponent, canActivate: [AuthGuard]  } ,
  { path: 'song/:id', component: SongComponent, canActivate: [AuthGuard] }  ,
  { path: 'programs', component: ProgramlistComponent, canActivate: [AuthGuard]  }  ,
  { path: 'program/:id', component: ProgramComponent, canActivate: [AuthGuard] }  
];

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SonglistComponent,
    ProgramlistComponent,
    HeaderComponent,
    LoginComponent,
    TextformatPipe,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [TextformatPipe],
  providers: [SongService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
