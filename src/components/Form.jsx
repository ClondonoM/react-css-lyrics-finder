import { useState } from 'react';
import useLyrics from '../hooks/useLyrics';

const Form = () => {
  const { setAlert, searchLyric } = useLyrics();
  const [search, setSearch] = useState({
    artist: '',
    song: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes('')) {
      setAlert('Please fill out all fields');
      return;
    }
    searchLyric(search);
    setAlert('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend>Search by artist and song</legend>
      <div className='form-grid'>
        <div>
          <label htmlFor='artist'>Artist</label>
          <input
            type='text'
            name='artist'
            placeholder='Artist'
            value={search.artist}
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='song'>Song</label>
          <input
            type='text'
            name='song'
            placeholder='Song'
            value={search.song}
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input type='submit' value='Search' />
      </div>
    </form>
  );
};

export default Form;
