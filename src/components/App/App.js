import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

function RatedMovies() {
  return (
    <h1>RatedMovies</h1>
  )
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<p>signup</p>} />
          <Route path="signin" element={<p>signin</p>} />
          <Route path="/" element={<Main />} />
          <Route path="rated-movies" element={<RatedMovies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
