import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie : any;
  constructor() { }

  ngOnInit(): void {
  }
  selectedMovie(movie : any) {
    console.log('selected Movie');
    console.log(movie);
    this.movie = movie;
  }

}
