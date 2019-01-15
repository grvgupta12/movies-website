import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  //method to get the data of movies coming from api
  getMovieDetails() {
    var api = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';
    return this.http.get(api);
  }
}
