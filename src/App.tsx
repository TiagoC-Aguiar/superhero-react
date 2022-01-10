import Routes from './routes';
import { SearchProvider } from './contexts';

function App() {
  return (
    <SearchProvider>
      <Routes />;
    </SearchProvider>
  );
}

export default App;
