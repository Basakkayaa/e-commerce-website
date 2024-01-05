import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product'

export default function Navbar() {
  return (
    <div className='containerNav'>
          <div className='headerBox'>
            <div className='d-flex gap-20'>
               <i class="bi bi-basket2-fill icon"></i>
                <a href="#" className='color-w font-500 text-26'>onthelshelf.</a>
            </div>
            <div className='navSearch'>
              <i class="bi bi-search bi-searchIcon"></i>
             <Link to="/Product" element="Product"> <input type="search" placeholder='Search products' className='searchInput' /></Link>
            </div>
            <div className='list'>
              <span>
              <i class="bi bi-heart"></i>
              </span>
              <span>
              <i class="bi bi-basket2-fill"></i>
              </span>
              <div className="profileImg">
                <img src="" alt="" className='img'/>
              </div>
            </div>
        </div>
    </div>
  )
}
