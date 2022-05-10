import './App.css';
import Banner from './components/Banner';
import Favriote from './components/Favriote';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner /><MovieList /></>} />
          <Route path='/favourites' element={<><Favriote /></>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
