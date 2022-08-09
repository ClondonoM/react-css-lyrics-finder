import AppLyrics from './components/AppLyrics';
import { LyricsProvider } from './context/LyricsProvider';
function App() {
  return (
    <div className='App'>
      <LyricsProvider>
        <AppLyrics />
      </LyricsProvider>
    </div>
  );
}

export default App;
