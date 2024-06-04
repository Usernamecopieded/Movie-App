

import React, { useEffect, useState } from 'react';
import './MoviesPage.css'; // Import the same CSS file used in MoviesPage
import SearchBox from './SearchBox'; // Import the SearchBox component

const TvSeriesPage = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample TV series data with video URLs
  const sampleTvSeries = [

    {
      title: 'Black Adam',
      releaseYear: '2020',
      posterUrl: '/images/Adam.jpg',
      videoUrl: '/images/Thor Arrives In Wakanda Scene - Avengers Infinity War (2018) Movie CLIP 4K ULTRA HD(720P_HD).mp4',
    },
    {
      title: 'Archer',
      releaseYear: '2020',
      posterUrl: '/images/Archer.jpg',
      videoUrl: '/images/AVATAR 2 THE WAY OF WATER IMAX Trailer (4K ULTRA HD) NEW 2022(720P_HD).mp4',
    },
    {
      title: 'Avtar 2',
      releaseYear: '2020',
      posterUrl: '/images/Avatar.jpg',
      videoUrl: '/images/Avatar_ IMAX® (1080p).mp4 ',
    },
    {
      title: 'Avengers Endgame',
      releaseYear: '2020',
      posterUrl: 'images/Avengers.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4.mp4',
    },
   
    {
      title: 'Bird Box',
      releaseYear: '2020',
      posterUrl: '/images/Bird Box.jpg',
      videoUrl: '/images/Fall 2022 Movie.mp4',
    },
    {
        title: 'Black Panther',
        releaseYear: '2020',
        posterUrl: '/images/Wakanda 10.jpg',
        videoUrl: '/images/Avatar_ IMAX® (1080p).mp4  ',
      },

  //====================================================

      {
        title: 'The Book Thief',
        releaseYear: '2020',
        posterUrl: '/images/Book Thief.jpg',
        videoUrl: '/images/YT Lion King.mp4',
      },
 
      {
        title: 'Purple Heart',
        releaseYear: '2020',
        posterUrl: '/images/Purple.jpg ',
        videoUrl: '/images/YT Lion King.mp4 ',
      },
  
      {
        title: 'Dear Zindagi',
        releaseYear: '2020',
        posterUrl: '/images/Dear Zindagi.jpg',
        videoUrl: '/images/YT Lion King.mp4 ',
      },

    //================================================================
   
      {
        title: 'DUNE',
        releaseYear: '2020',
        posterUrl: '/images/DUNE.jpg',
        videoUrl: '/Entertainment_App/public/images/Avatar_ IMAX® (1080p).mp4  ',
      },
      {
        title: 'Fall',
        releaseYear: '2020',
        posterUrl: '/images/Fall.jpg',
        videoUrl: ' /images/YT Lion King.mp4',
      },
     
      {
        title: 'Little Woman',
        releaseYear: '2020',
        posterUrl: '/images/Little Woman.jpg ',
        videoUrl: '/images/YT Lion King.mp4 ',
      },
      {
        title: 'Me Before You',
        releaseYear: '2020',
        posterUrl: '/images/Me Before You.jpg',
        videoUrl: '/images/YT Lion King.mp4 ',
      },
      {
        title: 'Oppenheimer',
        releaseYear: '2020',
        posterUrl: '/images/Oppenheimer.jpg ',
        videoUrl: '/images/YT Lion King.mp4 ',
      },

    //================================================================
   
     
      {
        title: 'Prestige',
        releaseYear: '2020',
        posterUrl: '/images/Prestige.jpg ',
        videoUrl: ' /images/YT Lion King.mp4',
      },
      {
        title: 'Prince Mononoke',
        releaseYear: '2020',
        posterUrl: '/images/P.jpg',
        videoUrl: '/images/YT Lion King.mp4 ',
      },
      {
        title: 'Purple Heart',
        releaseYear: '2020',
        posterUrl: '/images/Purple.jpg ',
        videoUrl: ' /images/YT Lion King.mp4',
      },
      {
        title: 'Spider-Man',
        releaseYear: '2020',
        posterUrl: '/images/Spider-man.jpg ',
        videoUrl: '/images/YT Lion King.mp4 ',
      },

      {
        title: 'Spirited Away',
        releaseYear: '2020',
        posterUrl: '/images/Spirited away.jpg',
        videoUrl: '/images/YT Lion King.mp4',
      },

  //================================================================
   
     
      {
        title: 'Final Summer',
        releaseYear: '2020',
        posterUrl: '/images/Summer.jpg ',
        videoUrl: '/images/YT Lion King.mp4',
      },
      {
        title: 'Through my Window',
        releaseYear: '2020',
        posterUrl: '/images/Throught.jpg ',
        videoUrl: '/images/YT Lion King.mp4',
      },
      
      {
        title: 'Suzume',
        releaseYear: '2020',
        posterUrl: '/images/Suzume.jpg ',
        videoUrl: '/images/YT Lion King.mp4',
      },
      {
        title: 'Your Name',
        releaseYear: '2020',
        posterUrl: '/images/Your Name.jpg ',
        videoUrl: '/images/YT Lion King.mp4',
      },
     
    {
      title: '13 Reason Why',
      releaseYear: '2020',
      posterUrl: '/images/13 Reason.jpg  ',
      videoUrl: '/images/YT Lion King.mp4',
    },

  //================================================================
  
    
   

  //================================================================
   
    {
      title: 'Alice of Borderland',
      releaseYear: '2020',
      posterUrl: '/images/Alice.jpg ',
      videoUrl: ' /images/YT Lion King.mp4',
    },

    {
      title: 'All of Us Are Dead',
      releaseYear: '2020',
      posterUrl: '/images/Last Man.jpg ',
      videoUrl: ' /images/YT Lion King.mp4',
    },
    {
      title: 'Queens Gambit',
      releaseYear: '2020',
      posterUrl: '/images/The Queens Gambit(JPG).jpg',
      videoUrl: ' ',
    },
    {
      title: 'All the Bright Places',
      releaseYear: '2020',
      posterUrl: '/images/Place.jpg ',
      videoUrl: '/images/YT Lion King.mp4 ',
    },
    {
      title: 'Joker',
      releaseYear: '2020',
      posterUrl: '/images/Joker 5.jpg',
      videoUrl: ' ',
    },
    {
      title: '1899',
      releaseYear: '2020',
      posterUrl: '/images/1899.jpg ',
      videoUrl: '/images/YT Lion King.mp4 ',
    },

     
    {
      title: 'The Punisher',
      releaseYear: '2020',
      posterUrl: '/images/Punisher.jpg ',
      videoUrl: 'images/Entertainment App Movie Video Sample.mp4.mp4 ',
    },
    {
      title: 'You',
      releaseYear: '2020',
      posterUrl: '/images/You.jpg ',
      videoUrl: 'images/Entertainment App Movie Video Sample.mp4.mp4 ',
    },
    
    {
      title: 'Human',
      releaseYear: '2020',
      posterUrl: '/images/human.jpg',
      videoUrl: '/images/YT Lion King.mp4 ',
    },
    {
      title: 'The Crown',
      releaseYear: '2020',
      posterUrl: '/images/Crown.jpg ',
      videoUrl: '/images/YT Lion King.mp4 ',
    },
   
    {
      title: 'Midnight Mass',
      releaseYear: '2020',
      posterUrl: '/images/MASs.jpg ',
      videoUrl: ' /images/YT Lion King.mp4',
    },
    
  
  
//=====================================================
      
      {
        title: 'Naruto',
        releaseYear: '2020',
        posterUrl: '/images/Naruto.jpg ',
        videoUrl: '/images/One Piece.mp4',
      },
      {
        title: 'One Piece',
        releaseYear: '2020',
        posterUrl: '/images/One Piece.jpg',
        videoUrl: '/images/One Piece 1.1.mp4',
        
      },
      {
        title: 'Naruto Shippuden',
        releaseYear: '2002',
        posterUrl: '/images/Naruto Shippuden.jpg ',
        videoUrl: ' /images/YT Lion King.mp4',
      },
      {
        title: 'Attack on Titan',
        releaseYear: '2020',
        posterUrl: '/images/Attack.jpg',
        videoUrl: ' /images/YT Lion King.mp4',
      },
      {
        title: 'My Hero Academia: World Heroes Mission',
        releaseYear: '2020',
        posterUrl: '/images/My Hero.jpg ',
        videoUrl: ' /images/YT Lion King.mp4',
      },
      {
        title: 'Purple Heart',
        releaseYear: '2020',
        posterUrl: '/images/Purple.jpg ',
        videoUrl: ' /images/YT Lion King.mp4',
      },
  
      {
        title: 'Dear Zindagi',
        releaseYear: '2020',
        posterUrl: '/images/Dear Zindagi.jpg',
        videoUrl: ' /images/YT Lion King.mp4',
      },


  



    // ... Repeat this structure for other TV series
  ];

  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
   
    setTvSeries(sampleTvSeries);

    // If you want to fetch data from an API:
    // axios.get('/api/tv-series').then((response) => {
    //   setTvSeries(response.data);
    // }).catch((error) => {
    //   console.error('Error fetching TV series:', error);
    // });
  }, []);

  const handleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.some(
      (bookmarkedItem) => bookmarkedItem.title === item.title
    );

    if (isBookmarked) {
      setBookmarkedItems((prevItems) =>
        prevItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title)
      );
    } else {
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

  const filteredTvSeries = tvSeries.filter((series) =>
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <h2 className="movies-header"> Popular Movies</h2>
      {playingVideo && (
        <div className="video-overlay" onClick={stopVideo}>
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
        {filteredTvSeries.map((series) => (
          <div key={series.title} className="movie-card">
            <img src={series.posterUrl} alt={series.title} />
            <p>{series.title} ({series.releaseYear})</p>
            {series.videoUrl && (
              <div
                className="play-button"
                onClick={() => playVideo(series.videoUrl)}
              >
                ▶ Play
              </div>
            )}
            <div
              className="bookmark-button"
              onClick={() => handleBookmark(series)}
            >
              {bookmarkedItems.some(
                (bookmarkedItem) => bookmarkedItem.title === series.title
              )
                ? 'Bookmarked'
                : 'Bookmark'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvSeriesPage;
