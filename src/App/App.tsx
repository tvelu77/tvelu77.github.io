import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutMe } from '../pages/AboutMe';
import { Header, theme } from './components/Header';
import Navigation from './components/Navigation';
import { Experiences } from 'pages/Experiences';
import Projects from 'pages/Projects';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;