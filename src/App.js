// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import TvSeriesPage from './components/TvSeriesPage';
import TrendingPage from './components/TrendingPage';
import BookmarkPage from './components/BookmarkPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import './App.css';

const NavItem = ({ to, iconSrc, name }) => (
  <li>
    <Link to={to}>
      <img src={iconSrc} alt={name} className="nav-icon" />
      <span className="nav-name">{name}</span>
    </Link>
  </li>
);

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavItem to="/" iconSrc="/images/home-icon.png" name="Home" />
        <NavItem to="/movies" iconSrc="/images/movies-icon.png" name="Movies" />
        <NavItem to="/tv-series" iconSrc="/images/tv-series-icon.png" name="TV Series" />
        <NavItem to="/bookmarks" iconSrc="/images/bookmark-icon.png" name="Bookmarks" />
        <NavItem to="/login" iconSrc="/images/login-icon.png" name="Login"/>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<TrendingPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TvSeriesPage />} />
          <Route path="/bookmarks" element={<BookmarkPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
