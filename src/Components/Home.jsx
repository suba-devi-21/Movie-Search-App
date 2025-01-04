

import React, { useState, useEffect } from 'react';
import { fetchMovies } from './api'; // Import the API functions
import { Link } from 'react-router-dom';
import '../Components/css/movie.css';
const Home = () => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        const searchMovies = async () => {
            if (query.trim() === "") return;

            try {
                const data = await fetchMovies(query, type, page,20);
                setResults(data.Search || []); // Handle no results
                setTotalResults(parseInt(data.totalResults) || 0)
            } catch (error) {
                setError(error.message); // Display API error message
                setResults([]);
            }
        };

        searchMovies();
    }, [query, type, page]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setPage(1); // Reset page on new search
    };

    const totalPages = Math.ceil(totalResults/20);

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="">All</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episodes</option>
                </select>
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {results.length === 0 && query.trim() !== "" && !error && <p>No results found.</p>}

            <div className="movie-container"> {/* Apply grid CSS */}
                {results.map(movie => (
                    <div key={movie.imdbID} className="movie-card"> {/* Apply card CSS */}
                        <Link to={`/movie/${movie.imdbID}`}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </Link>
                    </div>
                ))}
            </div>


        {/* Pagination */}
        {results.length > 0 && <div>
            <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled = {page === 1}>Previous</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled = {page === totalPages}>Next</button>
        </div>}
        </div>
    );
};

export default Home;
