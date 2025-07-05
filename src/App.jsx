import WeatherApp from './WeatherApp';
import { ThemeProvider } from './ThemeContext';

function App() {
 return(
  <ThemeProvider>
    <WeatherApp/>
  </ThemeProvider>
 );
}

export default App
