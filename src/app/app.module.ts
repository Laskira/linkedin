import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { MyPagesComponent } from './components/my-pages/my-pages.component';
import { RecentComponent } from './components/recent/recent.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { TimediffPipe } from './pipes/timediff.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    NavbarComponent,
    UserComponent,
    MyPagesComponent,
    RecentComponent,
    PostComponent,
    FeedComponent,
    CursosComponent,
    AnunciosComponent,
    ListPostComponent,
    TimediffPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
