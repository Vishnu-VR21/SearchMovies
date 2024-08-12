import React from 'react'
import './App.css' 
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

//fd217d42

const API_URL = 'https://www.omdbapi.com?apikey=fd217d42'

const movie1 = {
        "Title": "Team Thor",
        "Year": "2016",
        "imdbID": "tt6016776",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
    }


function App() {

    const [movies,setMovies]=useState([]);
    const[searchTerm,setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovies('Thor')
    },[])
  return (
    <div className='app'>
        <h1>SearchMovies</h1>
        <div className='search'>
            <input 
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)} />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)} />
        </div>
        {movies?.length>0
        ? ( <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
            </div>
            ):(
            <div className='empty'>
                <h2>No movies found</h2>
            </div>
            )}    
    </div>
  )}
export default App
