import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { FourOhFour } from 'pages/FourOFour';
import { Header, theme } from './components/Header';
import Navigation from './components/Navigation';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<FourOhFour />} />
          <Route path="/experiences" element={<FourOhFour />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;