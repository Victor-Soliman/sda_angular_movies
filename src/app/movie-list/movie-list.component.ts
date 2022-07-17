import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output('onUpdate') updateEvent : EventEmitter<any> = new EventEmitter<any>();

  movies: Array<any> = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  onDeleteClicked(id: string): void {
    this.movieService.delete(id).subscribe((response) => {
      console.log(response);
      // this.movies=this.movies.filter((movie) => movie.id != id);
      this.getAllMovies();
    })
  }

  onUpdateClicked(movie : any): void {
   this.updateEvent.emit(movie);
  }

  private getAllMovies(): void {
    this.movieService.getAll().subscribe((response: any) => {
      console.log(response);
      this.movies = response.data;
    })
  }
}
