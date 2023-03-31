import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import ProductForm from './components/ProductForm'
import Shop from './components/Shop'
import ShopOne from './components/ShopOne';

function App() {

  const [productList, setProductList] = useState([])

  return (
    <BrowserRouter>
      <div className="m-auto bg-blue-500 shadow border p-4">
        <div className='flex items-center justify-between p-4'>
          <Link to='/'><h1 className='font-mono text-3xl italic font-bold text-stone-900'>Product Manager</h1></Link>
          <nav className='flex items-center justify-evenly w-1/2 text-lg text-amber-400 bg-stone-700 rounded p-2'>
            <Link className='hover:text-amber-200' to='/display'>Display All</Link>
            <Link className='hover:text-amber-200' to='/create'>Create</Link>
          </nav>
        </div>
        <Routes>
          <Route path='/display' element={<Shop productList={productList} setProductList={setProductList} />} />
          <Route path='/display/:id' element={<ShopOne />} />
          <Route path='/create' element={<ProductForm productList={productList} setProductList={setProductList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
