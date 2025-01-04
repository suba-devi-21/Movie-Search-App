// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './api'; // Import your API function
import '../Components/css/movie.css';

const MovieDetails = () => {
    const { id } = useParams(); // Get the 'id' from the URL
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const data = await fetchMovieDetails(id);
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Set loading to false after fetching (success or error)
            }
        };

        if (id) { // Only fetch if id is available
            getMovieDetails();
        }
    }, [id]);

    if (loading) {
        return <div>Loading movie details...</div>; // Display loading message
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>; // Display error message
    }

    if (!movie) {
        return <div>Movie not found.</div>; // Handle case where movie is null
    }

    return (
        <div>
            <div className="movie-details-container">
    <img className="movie-details-image" src={movie.Poster} alt={movie.Title} />
    <div className="movie-details-info">
          <h1>{movie.Title}</h1>
           <p>Year: {movie.Year}</p>
           <p>Genre: {movie.Genre}</p>
            <p>Plot: {movie.Plot}</p>
            <p>imdbRating: {movie.imdbRating}</p>
            <p>Actors: {movie.Actors}</p>
        {/* ... other details */}
       </div>
        </div>
            {/* <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Year: {movie.Year}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Plot: {movie.Plot}</p>
            <p>imdbRating: {movie.imdbRating}</p>
            <p>Actors: {movie.Actors}</p>
            ... display other movie details */} 
        </div>
    );
};

export default MovieDetails;