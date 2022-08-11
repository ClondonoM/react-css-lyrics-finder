import { useCallback } from 'react';
import useLyrics from '../hooks/useLyrics';

const Lyric = () => {
  const { search, lyric } = useLyrics();
  const artist = useCallback(search.artist, [lyric]);
  const song = useCallback(search.song, [lyric]);

  return (
    <>
      <p>{artist.toUpperCase()}</p>
      <p>{song.toUpperCase()}</p>
      <div className='letra'>{lyric}</div>
    </>
  );
};

export default Lyric;
