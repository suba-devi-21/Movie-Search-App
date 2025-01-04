const API_KEY = 'b3df5006'; 

export const fetchMovies = async (query, type = '', page = 1) => { 
    try {
       
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            // Throw an error with the API's error message
            throw new Error(data.Error); 
        }

        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error; // Re-throw the error for the component to handle
    }
};

export const fetchMovieDetails = async (id) => {
    try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error);
        }

        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};