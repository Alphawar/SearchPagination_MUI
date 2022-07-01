import { Container } from '@mui/material';
import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Container
      sx={{mt: 5}}
      maxWidth="md"
    >
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </Container>
  );
}

export default App;
