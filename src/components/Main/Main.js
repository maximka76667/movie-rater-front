import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

function Main() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<p>Main</p>} />
        <Route path="/movies" element={<p>Movies</p>} />
      </Routes>
    </main>
  );
}

export default Main;