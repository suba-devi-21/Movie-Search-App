# React Movie Search App

This is a React application that allows users to search for movies using the OMDB API. It features search functionality, pagination, detailed movie views, filtering by type, and robust error handling.

## Features

*   **Movie Search:** Search for movies by title or keywords using a search bar.
*   **Search Results Display:** Displays search results in a grid format with movie posters, titles, and brief descriptions.
*   **Pagination:** Handles large result sets with pagination.
*   **Detailed Movie View:** Provides a detailed view for each movie, including a larger poster, title, release year, genre, plot summary, ratings, and cast.
*   **Type Filtering:** Filters movies by type (movie, series, episode) using the OMDB API's `type` parameter, *without using the `Array.filter()` method*.
*   **React Router Navigation:** Uses React Router for navigation between the search page and movie details page.
*   **Error Handling:** Implements error handling for API requests and displays user-friendly messages.
*   **No Results Handling:** Handles cases where no results are found.
*   **Responsive Design:** Uses Tailwind CSS for a responsive design that works well on various screen sizes.

## Tech Stack

*   ReactJS
*   React Router
*   Tailwind CSS
*   JavaScript
*   OMDB API

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/[your-repo-name].git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd [your-repo-name]
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

4.  **Obtain an OMDB API key:**

    You'll need an API key from the OMDB API to use this application. You can obtain one by signing up at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).

5.  **Create a `.env.local` file:**

    Create a file named `.env.local` in the root of your project and add your OMDB API key:

    ```
    VITE_OMDB_API_KEY=your_actual_api_key
    ```

    Make sure this file is in your `.gitignore` to prevent committing your API key.

6.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

7.  **Open the application in your browser:**

    Open your web browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

