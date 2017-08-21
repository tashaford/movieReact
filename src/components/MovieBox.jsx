import React from 'react';
import MovieList from './MovieList.jsx';

class MovieBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Atomic Blonde",
        showtimes: "17:40, 19:15, 20:45"
      },
      {
        id: 2,
        title: "The Hitman's Bodyguard",
        showtimes: "link"
      },
      {
        id: 3,
        title: "The Dark Tower",
        showtimes: "link"
      },
      {
        id: 4,
        title: "Valerian And The City Of A Thousand Planets",
        showtimes: "link"
      }

      ]
    }
  }

  render(){
    return (
      <div className = "movie-box">
      <h1>Movies showing today</h1>
      <MovieList data ={this.state.data}/>
      </div>
    )
  }

}

export default MovieBox