import { useState, createContext } from 'react';
import axios from 'axios';

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [search, setSearch] = useState({
    artist: '',
    song: '',
  });
  const [alert, setAlert] = useState('');
  const [lyric, setLyric] = useState('');
  const [loading, setLoading] = useState(false);
  const searchLyric = async (search) => {
    setLoading(true);
    setLyric('');
    setAlert('');
    try {
      const { artist, song } = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const { data } = await axios(url);
      setLyric(data.lyrics);
      setAlert('');
    } catch (err) {
      setAlert('Song not found');
    }
    setLoading(false);
  };
  return (
    <LyricsContext.Provider
      value={{
        search,
        setSearch,
        alert,
        setAlert,
        search,
        searchLyric,
        lyric,
        loading,
      }}
    >
      {children}
    </LyricsContext.Provider>
  );
};
export { LyricsProvider };

export default LyricsContext;
