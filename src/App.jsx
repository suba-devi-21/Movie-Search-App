import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails'; // Create this component
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
    return (
        <Router>
          <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}

export default App;