import React, { Component } from 'react';
import option from './../Utils/Utils.js';
import MovieCard from './../MovieCard/MovieCard.js';
import { MovieButton } from './../Button/Button.js';
import { SelectMovieButton } from './../Button/Button.js';
import MoviePage from './../MoviePage/MoviePage.js';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      listMovie: [],
      selectedMovie: ''
    }
    this.initialState = this.state;
  }


resetState = () => {
  this.setState(this.initialState);
}

// componentWillMount = () => this.getMovies('movie/top_rated')

// getMovies = (type) => {}

// searchMovies = (e) => {}

getSelectedMovie = (movie) => {
  this.resetState();
  this.setState({selectedMovie: movie});
}

showSelectedMovie = () => {
  if(this.state.selectedMovie) {
    return <MoviePage movie={this.state.selectedMovie} />;
  } 
}

  render() {

    const movies = this.state.movies.map(
      x => <MovieCard 
            key={x.id}
            data={x}
            getSelectedMovie={this.getSelectedMovie}
          />
      );

    const links = option.map(
      x => <MovieButton
            onClick={this.getMovies}
            key={x.link}
            movie={x}
          />
      ); 

      const listMovieSearched = this.state.listMovie.map(
          x => <SelectMovieButton 
                onClick={this.getSelectedMovie}
                key={x.id}
                movie={x}
              />
        );


    return (
    <div>
      <div className="mainBar">
        <h1 className="mainTitle">THE MOVIE DB!</h1>
        <div className="links">
          {links}
        </div>
        <form className="searchBar"
              onChange={this.searchMovie}>
            <input className="input" 
                   placeholder="Type the movie to search"
                   type="text"
                   name="movieInput"/>
            {listMovieSearched}
        </form>
      </div>
      <div className="moviePageContainer">
        {this.showSelectedMovie()}
      </div>
      <div className="main">
        {movies}
      </div>
    </div>
    );
  }
}

export default Main;

