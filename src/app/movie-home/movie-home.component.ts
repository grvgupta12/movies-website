import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  constructor(private movieDataService: MovieDataService) { }

  public showMovieDetails: boolean = false;
  movieDetails = []; 
  moviesData: any = [];


  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieDataService.getMovieDetails()
      .subscribe(results => {

        this.moviesData = results;
        this.movieDetails = this.moviesData[1];
        var movies = this.movieDetails;

        //to get key value pairs of movie data coming from api
        var moviesList = Object.keys(movies).map(function (key) {
          return Number(key), movies[key];
        });
        this.movieDetails = moviesList;
        this.showMovieDetails = true; //set flag to show movie details component
      })
  }

}




