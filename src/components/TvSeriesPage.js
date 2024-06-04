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
      title: '13 Reason Why',
      releaseYear: '2020',
      posterUrl: '/images/13 Reason.jpg  ',
      videoUrl: '/images/TrimLion King[Trim].mp4',
     
    },
    {
      title: 'The Punisher',
      releaseYear: '2020',
      posterUrl: '/images/Punisher.jpg ',
      videoUrl: '/images/TrimLion King[Trim].mp4',
    },
    {
      title: 'You',
      releaseYear: '2020',
      posterUrl: '/images/You.jpg ',
      videoUrl: '/images/TrimLion King[Trim].mp4',
    },
    {
      title: 'Human',
      releaseYear: '2020',
      posterUrl: '/images/human.jpg',
      videoUrl: '/images/Avatar_ The Way of Water.mp4 ',
    },
    {
      title: 'The Crown',
      releaseYear: '2020',
      posterUrl: '/images/Crown.jpg ',
      videoUrl: '/images/TrimLion King[Trim].mp4',
    },
   
    {
      title: 'Midnight Mass',
      releaseYear: '2020',
      posterUrl: '/images/MASs.jpg ',
      videoUrl: '/images/TrimLion King[Trim].mp4',
    },
    
   
   
//=================================================
{
  title: 'JUJUSTU KAISEN',
  releaseYear: '2020',
  posterUrl: '/images/JUJUSTU.jpg ',
  videoUrl: '/images/Trim ZORO.mp4',
},
    {
      title: 'Naruto',
      releaseYear: '2020',
      posterUrl: '/images/Naruto.jpg ',
      videoUrl: '/images/Trim ZORO.mp4',
    },
    {
      title: 'One Piece',
      releaseYear: '2020',
      posterUrl: '/images/One Piece.jpg',
      videoUrl: '/images/Trim ZORO.mp4',
      
    },
    {
      title: 'Naruto Shippuden',
      releaseYear: '2002',
      posterUrl: '/images/Naruto Shippuden.jpg ',
      videoUrl: '/images/Trim ZORO.mp4',
    },
    {
      title: 'Demon Slayer',
      releaseYear: '2020',
      posterUrl: '/images/Demon.jpg',
      videoUrl: '/images/Trim ZORO.mp4',
    },
    {
      title: 'My Hero Academia: World Heroes Mission',
      releaseYear: '2020',
      posterUrl: '/images/My Hero.jpg ',
      videoUrl: '/images/Trim ZORO.mp4',
    },

//================================================

    
    {
      title: 'Queens Gambit',
      releaseYear: '2020',
      posterUrl: '/images/The Queens Gambit(JPG).jpg',
      videoUrl: ' ',
    },
    {
      title: '1899',
      releaseYear: '2020',
      posterUrl: '/images/1899.jpg ',
      videoUrl: ' ',
    },
    {
      title: 'Alice of Borderland',
      releaseYear: '2020',
      posterUrl: '/images/Alice.jpg ',
      videoUrl: ' ',
    },

   
    {
      title: 'All of Us Are Dead',
      releaseYear: '2020',
      posterUrl: '/images/Last Man.jpg ',
      videoUrl: ' ',
    },
  
    
    {
      title: 'Control Z',
      releaseYear: '2020',
      posterUrl: '/images/Control 2.jpg ',
      videoUrl: ' ',
    },
    
    {
      title: 'Moon Knight',
      releaseYear: '2020',
      posterUrl: '/images/Moon 2.jpg',
      videoUrl: ' ',
    },
    
  
    {
      title: 'Stranger Things',
      releaseYear: '2020',
      posterUrl: '/images/Stranger.jpg',
      videoUrl: 'Entertainment_App/public/images/Z Strangerthingsedit.mp4 ',
    },
      {
        title: 'Breaking Bad',
        releaseYear: '2020',
        posterUrl: '/images/Bad TV.jpg',
        videoUrl: ' ',
      },
      {
        title: 'Squid Game',
        releaseYear: '2020',
        posterUrl: '/images/Game.jpg ',
        videoUrl: ' ',
      },
      
     
     
      {
        title: 'Lucifer',
        releaseYear: '2020',
        posterUrl: '/images/Lucifer.jpg',
        videoUrl: ' ',
      },
      
      {
        title: 'Money Heist ',
        releaseYear: '2020',
        posterUrl: '/images/Money Heist.jpg',
        videoUrl: ' ',
      },
      {
        title: 'Entre la VIDA Muerte',
        releaseYear: '2020',
        posterUrl: '/images/Entrela.jpg ',
        videoUrl: ' ',
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
      <h2 className="movies-header">TV Series</h2>
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
