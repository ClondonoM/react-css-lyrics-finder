import Form from './Form';
import Alert from './Alert';
import Lyric from './Lyric';
import Spinner from './Spinner';

import useLyrics from '../hooks/useLyrics';

const AppLyrics = () => {
  const { alert, lyric, setLyric, loading } = useLyrics();
  return (
    <>
      <header>Lyrics Finder</header>
      <Form />
      <main>
        {alert ? (
          <Alert>{alert}</Alert>
        ) : lyric ? (
          <Lyric />
        ) : loading ? (
          <Spinner />
        ) : (
          <p className='text-center '>Search Lyrics</p>
        )}
      </main>
    </>
  );
};

export default AppLyrics;
