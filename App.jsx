import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Product'
import AddProduct from './components/Addproduct'

const App = () => {
  return (
    <>
    <Router>
      <nav className='bg-gray-800 shadow-lg'>
        <div className='max-w-7xl max-auto px-4 sm:px-6 1g:px-8'>
          <ul className='flex space-x-6 py-4'>
            <li>
              <Link to="/" className='text-white hover:text-grey-300'>Home</Link>
            </li>
            <li>
              <Link to="/products" className='text-white hover:text-grey-300'>Products</Link>
            </li>
            <li>
              <Link to="/addproduct" className='text-white hover:text-grey-300'>Add Products</Link>
            </li>
<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-twitter"></i>
<i className="fa-solid fa-gear"></i>


          </ul>
          
        </div>
      
      </nav>
      
      {/* Routes */}
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/addproduct' element = {<AddProduct/>}/>


      </Routes>

      
    </Router>
      

    </>


    
  )
}

export default App