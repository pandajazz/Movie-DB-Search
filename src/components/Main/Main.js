import React, { Component } from 'react';
import option from './../Utils/Utils.js';
import { 
  apiFactoryList, 
  apiFactorySearch } from './../Service/api.js';
import MovieCard from './../MovieCard/MovieCard.js';
import { MovieButton } from './../Button/Button.js';
import { SelectMovieButton } from './../Button/Button.js';
import MoviePage from './../MoviePage/MoviePage.js';


export default class Main extends Component {
  initialState = {
      movies: [],
      listMovie: [],
      selectedMovie: '',
  }
  state = this.initialState;

  componentWillMount = () =>
      this.getMovies('movie/top_rated');

  resetState = () =>
      this.setState(this.initialState);

  getMovies = (type) =>
      apiFactoryList(type)
          .then(data => {
              this.resetState();
              this.setState({ movies: data.results });
          })
          .catch(err => err);

  searchMovie = (e) =>
      apiFactorySearch(e.target.value)
          .then(data => data.results.filter(x => x.title))
          .then(data => {
              this.resetState();
              this.setState({ listMovie: data });
          })
          .catch(err => err);

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
                  movie={x}
              key={x.id}
          />
          );

          return (
          <div>
              <div className="mainBar">
                  <h1 className="mainTitle">The Movie DB</h1>
                  <div className="links">
                      {links}
                  </div>
                  <form onChange={this.searchMovie} className="searchBar">
                      <input className="input" placeholder="Type the movie to search" type="text" name="movieInput"/>
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