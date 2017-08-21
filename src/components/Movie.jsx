import React from 'react';

class Movie extends React.Component {

  render () {
    return (
        <div className="movie">
        <h4 className="movieTitle">{this.props.title}</h4>
        <a href="#">Showtimes</a>
        </div>
      )
  }
}

export default Movie