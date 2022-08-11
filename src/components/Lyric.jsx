import useLyrics from '../hooks/useLyrics';

const Lyric = () => {
  const { search, lyric } = useLyrics();

  return (
    <>
      <p>{search.artist}</p>
      <p>{search.song}</p>
      <div className='letra'>{lyric}</div>
    </>
  );
};

export default Lyric;
