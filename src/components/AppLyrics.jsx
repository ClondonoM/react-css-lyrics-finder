import Form from './Form';
import Alert from './Alert';
import useLyrics from '../hooks/useLyrics';

const AppLyrics = () => {
  const { alert } = useLyrics();
  return (
    <>
      <header>Lyrics Finder</header>
      <Form />
      <main>{alert && <Alert>{alert}</Alert>}</main>
    </>
  );
};

export default AppLyrics;
