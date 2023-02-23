
import React, { useState, useEffect} from  'react';
import '../App.css';
import MovieCard from '../MovieCard';
import searchIcon from '/search.svg';



const API_URL = 'https://www.omdbapi.com?apikey=4e720b86';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
      searchMovies("Batman");
      }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
     
      setMovies(data.Search)
    }
  
    
    return ( 
      <div className='app'>
        
        <h1>MovieLand</h1>
        <div className='search'>
          <input
          placeholder='Search for movies' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
           src={searchIcon} 
          alt='search' 
          onClick={() => searchMovies(searchTerm)} />
        </div>
  
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (<MovieCard  movie = {movie}/>))}  
          </div>
        ) :(
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
  
       
      </div>
    )
}

export default HomePage