import React from 'react';
import axios from 'axios';
import './reset.min.css'
import './App.css'
import Movie from './Movie';
import ImgLoading from './Spinner-1s-200px.svg';

class App extends React.Component {
  state = {
    isLoading : true,    
    movies : [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort=rating&limit=20');
    this.setState({ movies : movies, isLoading : false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;

    return (
      <div id="wrap">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text"><img src={ImgLoading} alt="Loading" /></span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(args => (
              <Movie 
                key={args.id} 
                id={args.id} 
                year={args.year} 
                title={args.title} 
                summary={args.summary} 
                poster={args.medium_cover_image}
                genres={args.genres} 
              />
            ))}
          </div>

        )}
      </div>
    )
    
  }
}

export default App;




