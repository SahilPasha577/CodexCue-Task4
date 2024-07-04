import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './MyComp/HomePage';
import { CartPage } from './MyComp/CartPage';

function App() {
  return (
    <>
      <div className="App">
        <h1>Simple E-commerce Store</h1>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
