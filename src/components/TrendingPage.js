// client/src/components/TrendingPage.js
import React, { useEffect, useState } from 'react';
import './TrendingPage.css';
import './MoviesPage.css'; // Import the same CSS file used in MoviesPage
import SearchBox from './SearchBox'; // Import the SearchBox component
import RecommendedPage from './RecommendedPage';

const TrendingPage = () => {
  const [trending, setTrending] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

// Sample trending data
  const sampleTrending = [
    {
      title: 'Dune',
      releaseYear: '2024',
      imageUrl: '/images/Z Dune.jpg',
      videoUrl: '/images/TrimDune_ Part Two _[Trim].mp4',
    },
    {
      title: 'Avatar 2',
      releaseYear: '2022',
      imageUrl: '/images/Z Avatar 2.jpg',
      videoUrl: '/images/TrimEntertainment App Movie Video Sample.mp4[Trim].mp4',
    },
    {
      title: 'John Wick',
      releaseYear: '2023',
      imageUrl: '/images/Z John Wick.jpg',
      videoUrl: '/images/Trim John Wick 4 _ Dolby 5.1-(1080p)[Trim].mp4',
    },
    {
      title: 'Godzilla & Kong',
      releaseYear: '2024',
      imageUrl: '/images/Z dinosaur.jpg',
      videoUrl: '/images/Trim Godzilla x Kong.mp4',
    },
    
    {
      title: 'One Piece',
      releaseYear: '2024',
      imageUrl: '/images/Z One Piece.jpg',
      videoUrl: '/images/TrimOne Piece[Trim].mp4',
    },
    
    {
      title: 'Black Panther',
      releaseYear: '2022',
      imageUrl: '/images/Z Wakanda Forever.jpg',
      videoUrl: '/images/TrimBlack Panther_ Wakanda Forever[Trim].mp4',
    },
   
    {
      title: 'The Lion King',
      releaseYear: '2021',
      imageUrl: '/images/Z lionking.jpg',
      videoUrl: '/images/TrimLion King[Trim].mp4',
    },
    
    
    {
      title: 'Guardians',
      releaseYear: '2024',
      imageUrl: '/images/Z gardian ROCKET.jpg',
      videoUrl: '/images/YT Guardians.mp4',
    },


    // ... (other trending items)
  ];

  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setTrending(sampleTrending);

    // If you want to fetch data from an API:
    // axios.get('/api/trending').then((response) => {
    //   setTrending(response.data);
    // }).catch((error) => {
    //   console.error('Error fetching trending:', error);
    // });
  }, []);

  const handleBookmark = (item) => {
    // Implement your logic to add/remove items from bookmarks
    const isBookmarked = bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title);

    if (isBookmarked) {
      // If already bookmarked, remove from bookmarks
      const updatedBookmarks = bookmarkedItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title);
      setBookmarkedItems(updatedBookmarks);
    } else {
      // If not bookmarked, add to bookmarks
      setBookmarkedItems([...bookmarkedItems, item]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const playVideo = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  const stopVideo = () => {
    setPlayingVideo(null);
  };


  const filteredTrending = trending.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Trending state:', filteredTrending);
  console.log('Bookmarked state:', bookmarkedItems);

  return (
    <div>
      <SearchBox onSearch={handleSearch} /> {/* Include the SearchBox component */}
      <h2 className="movies-header">Trending</h2>
      {playingVideo && (
        <div className="video-overlay" onClick={stopVideo}>
          {/* Video component goes here */}
          <video
            className="centered-video"
            width="70%"
            controls
            autoPlay
            onEnded={stopVideo}
          >
            <source src={playingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="trending-list">
        {filteredTrending.slice(0, 8).map((item) => (
          <div key={item.title} className="movie-card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Release Year: {item.releaseYear}</p>
            <div
              className="play-button"
              onClick={() => playVideo(item.videoUrl)}
            >
              ▶ Play
            </div>
            <div className="bookmark-button" onClick={() => handleBookmark(item)}>
              {bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title)
                ? 'Bookmarked'
                : 'Bookmark'}
            </div>
          </div>
        ))}
      </div>

      {/* Recommended for You section */}

      {/* Movie cards from RecommendedPage */}
      <RecommendedPage />

    </div>
  );
};

export default TrendingPage;