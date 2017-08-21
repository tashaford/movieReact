import React from 'react';
import Movie from './Movie.jsx';

class MovieList extends React.Component {

  render() {
    let movieNodes = this.props.data.map((movie) => {
      return (
        <Movie title={movie.title} key={movie.id}>
        {movie.showtimes}
        </Movie>
      )
    })

    return (
      <div className="movie-list">
      {movieNodes}
      </div>
      )
  }
}

export default MovieList