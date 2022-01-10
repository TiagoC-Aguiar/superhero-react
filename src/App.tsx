import Routes from './routes';
import { SearchProvider, HeroProvider } from './contexts';

function App() {
  return (
    <SearchProvider>
      <HeroProvider>
        <Routes />
      </HeroProvider>
    </SearchProvider>
  );
}

export default App;
