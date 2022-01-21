import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<p>signup</p>} />
          <Route path="/signin" element={<p>signin</p>} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
