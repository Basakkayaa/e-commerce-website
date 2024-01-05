import React from 'react';
import Navbar from './sectionCompanents/Navbar';
import Dowland from './sectionCompanents/Dowland';
import Footer from './sectionCompanents/Footer';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div>
    <Navbar/>

    <div className='containerAbout'>
        <div className='d-flex gap-5 mb-10'>
        <Link to="/About" element="About" > <i class="bi bi-arrow-left"></i></Link>
         <p className='color-grey'>Back to all stores</p>
        </div>
        <div>
          <p id='productList' className='font-700 text-30'>10 search results for <span className='color' id='resultsProduct'>"chocolate"</span> </p>
          <div className='producFilter mt-20'>
                <button className='btn'>Chocolate Bars</button>
                <button className='btn'>Multiple Chocolate</button>
          </div>
        </div>
        <div>
          {/* ürünler listelenecek */}
        </div>
    </div>


    <Dowland/>
    <Footer/>
    </div>
  )
}
