import './App.css';

//Navigation
import { Routes, BrowserRouter, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Forms from "./pages/Forms";

function App() {
  return (
    <div className="App">
      <h1>Teste feito sozinho</h1>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About /> } /> 
          <Route path='/forms' element={ <Forms /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
