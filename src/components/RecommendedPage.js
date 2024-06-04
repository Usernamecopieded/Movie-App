import React, { useEffect, useState } from 'react';
import './MoviesPage.css';

const RecommendedPage = () => {
  const [movies, setMovies] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

 
  // Sample movie data
  const sampleMovies = [
    {
      title: 'Black Adam',
      releaseYear: '2020',
      posterUrl: '/images/Adan.jpg',
      videoUrl: '/images/TrimEntertainment App Movie Video Sample.mp4[Trim].mp4',
    },
    {
      title: 'Archer',
      releaseYear: '2020',
      posterUrl: '/images/Archer.jpg',
      videoUrl: '/images/TrimEntertainment App Movie Video Sample.mp4[Trim].mp4',
    },
    {
      title: 'Avatar',
      releaseYear: '2020',
      posterUrl: '/images/Avatar.jpg',
      videoUrl: '/images/TrimEntertainment App Movie Video Sample.mp4[Trim].mp4',
    },
    {
      title: 'Avengers Endgame',
      releaseYear: '2020',
      posterUrl: 'images/Avengers.jpg',
      videoUrl: '/images/TrimEntertainment App Movie Video Sample.mp4[Trim].mp4',
    },
    {
      title: 'Bird Box',
      releaseYear: '2020',
      posterUrl: '/images/Bird Box.jpg',
      videoUrl: '/images/TrimEntertainment App Movie Video Sample.mp4[Trim].mp4',
    },
    {
        title: 'Black Panther',
        releaseYear: '2020',
        posterUrl: '/images/Wakanda 10.jpg',
        videoUrl: '/images/TrimBlack Panther_ Wakanda Forever[Trim].mp4',
      },

//======================================= > 

      {
        title: 'Joker',
        releaseYear: '2020',
        posterUrl: '/images/Joker 5.jpg',
        videoUrl: '/images/Trim Godzilla x Kong.mp4',
      },
      
      {
        title: 'Before',
        releaseYear: '2020',
        posterUrl: '/images/Me Before You.jpg',
        videoUrl: ' /images/Trim Godzilla x Kong.mp4',
      },
      {
        title: 'The Book Thief',
        releaseYear: '2020',
        posterUrl: '/images/Book Thief.jpg',
        videoUrl: '/images/Trim Godzilla x Kong.mp4',
      },
     
      {
        title: 'Oppenheimer',
        releaseYear: '2020',
        posterUrl: '/images/Oppenheimer.jpg',
        videoUrl: '/images/Trim Godzilla x Kong.mp4',
      },

      {
        title: 'Dune',
        releaseYear: '2020',
        posterUrl: '/images/DUNE.jpg',
        videoUrl: '/images/TrimDune_ Part Two _[Trim].mp4',
      },
      {
        title: 'Little Womman',
        releaseYear: '2020',
        posterUrl: '/images/Little Woman.jpg',
        videoUrl: '/images/Trim Godzilla x Kong.mp4 ',
      },
      {
        title: 'Purple Heart',
        releaseYear: '2020',
        posterUrl: '/images/Purple.jpg',
        videoUrl: ' ',
      },

    //=================================== > > 

      {
        title: 'Fall',
        releaseYear: '2020',
        posterUrl: '/images/Fall.jpg',
        videoUrl: '/images/TrimDune_ Part Two _[Trim].mp4 ',
      },

     
     
      {
        title: 'Through my Window',
        releaseYear: '2020',
        posterUrl: '/images/Throught.jpg ',
        videoUrl: '/images/TrimDune_ Part Two _[Trim].mp4',
      },
      {
        title: 'Suzume',
        releaseYear: '2020',
        posterUrl: '/images/Suzume.jpg ',
        videoUrl: '/images/TrimDune_ Part Two _[Trim].mp4',
      },
      {
        title: 'Weathering With You',
        releaseYear: '2020',
        posterUrl: '/images/Weathering With You.jpg',
        videoUrl: '/images/TrimDune_ Part Two _[Trim].mp4 ',
      },
     
      
      
  
    ];

    
  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setMovies(sampleMovies);
  }, []);

  const handleBookmark = (item) => {
    // Check if the item is already bookmarked
    const isBookmarked = bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title);

    if (isBookmarked) {
      // Remove the item from bookmarks
      setBookmarkedItems((prevItems) => prevItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title));
    } else {
      // Add the item to bookmarks
      setBookmarkedItems((prevItems) => [...prevItems, item]);
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

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="movies-header">Recommended for You</h2>
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
      <div className="movies-list">
        {filteredMovies.slice(0, 16).map((item) => (
          <div key={item.title} className="movie-card">
            <img src={item.posterUrl} alt={item.title} />
            <p>{item.title} ({item.releaseYear})</p>
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
    </div>
  );
};

export default RecommendedPage;
