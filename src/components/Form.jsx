import { useState } from 'react';

const Form = () => {
  const [search, setSearch] = useState({
    artist: '',
    song: '',
  });
  return (
    <form>
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
