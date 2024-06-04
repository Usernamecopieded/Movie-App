// client/src/components/BookmarkPage.js
import React, { useState, useEffect } from 'react';
import './BookmarkPage.css'; // Import your CSS file
import SearchBox from './SearchBox'; // Import the SearchBox component

const BookmarkPage = () => {
  // Sample bookmarked content
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Retrieve bookmarks from local storage on component mount
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedItems(storedBookmarks);
  }, []);

  // Function to toggle bookmark status
  const toggleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.some((bookmark) => bookmark.title === item.title);

    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarkedItems.filter((bookmark) => bookmark.title !== item.title);
      setBookmarkedItems(updatedBookmarks);
    } else {
      // Add to bookmarks
      const updatedBookmarks = [...bookmarkedItems, item];
      setBookmarkedItems(updatedBookmarks);
    }
  };

  // Save bookmarks to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBookmarks = bookmarkedItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <div className="bookmarks-container">
        <h2 className="bookmarks-header">Bookmarks</h2>
        {filteredBookmarks.length === 0 ? (
          <p className="bookmark-content">No bookmarks match your search. Bookmark items on Trending, Movies, or TV Series pages.</p>
        ) : (
          <div className="bookmarks-list">
            {filteredBookmarks.map((item) => (
              <div key={item.title} className="bookmark-card">
                <img src={item.posterUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Release Year: {item.releaseYear}</p>
                <div className="bookmark-action" onClick={() => toggleBookmark(item)}>
                  {bookmarkedItems.some((bookmark) => bookmark.title === item.title) ? 'Remove Bookmark' : 'Add Bookmark'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarkPage;



