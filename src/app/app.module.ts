import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { MovieHomeComponent } from './movie-home/movie-home.component';

import {NgxPaginationModule} from 'ngx-pagination';//for pagination
import { MovieDetailsComponent } from './movie-home/movie-details/movie-details.component';
import { YoutubePipe } from './youtube.pipe'; 
import { MovieDataService } from './movie-data.service';
import { NumberProblemComponent } from './number-problem/number-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHomeComponent,
    MovieDetailsComponent,
    YoutubePipe,
    NumberProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    NgxPaginationModule,
    EmbedVideo.forRoot()
  ],
  providers: [MovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
