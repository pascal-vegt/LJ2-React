import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {

  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products/:id' element={<ProductDetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
