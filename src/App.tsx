import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GenresTestPage } from './pages/GenresTestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenresTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;