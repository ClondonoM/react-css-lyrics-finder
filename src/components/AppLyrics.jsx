import Form from './Form';
import Alert from './Alert';
import Lyric from './Lyric';
import useLyrics from '../hooks/useLyrics';

const AppLyrics = () => {
  const { alert, lyric, loading } = useLyrics();
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
          'loading...'
        ) : (
          <p className='text-center '>Search Lyrics</p>
        )}
      </main>
    </>
  );
};

export default AppLyrics;
