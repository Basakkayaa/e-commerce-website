import React from 'react'
import Navbar from './sectionCompanents/Navbar';
import Dowland from './sectionCompanents/Dowland';
import Footer from './sectionCompanents/Footer'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div  className='containerAbout'>
        <div className='d-flex gap-20 align-center'>
            <h1 className='font-700 text-30'>Available stores in</h1>
            <i class="bi bi-geo-alt-fill"></i>
            <span className='font-700 text-30 color'>Springfield</span>
        </div>
          <div className='toolBar'>
            <div className="buttons">
                    <button><a href="#">Delivery</a></button>
                    <button><a href="#">Pickup</a></button>
                    <button><a href="#">Shipping</a></button>
                </div>
              <div>
                  <span>
                    {/* <svg viewBox="0 0 24 24" style={"width: 16px; height: 16px; overflow: visible; opacity: unset; z-index: 1; fill: rgb(126, 126, 126)"}>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                    </svg> */}
                  </span>
                  <select name="Sort By" id="Most popular">
                    <option value="">Sort By; Most popular</option>
                    <option value="">Option 1</option>
                    <option value="">Option 1</option>
                  </select>
                  </div>
          </div>
          <div className='bigBox'>
            <div className='box'>
                
                {/* <button>Details</button> */}
                <div className='productLike'>
                  <p className='color-grey'>Twisted Shrimp</p>
                  <div className='d-flex gap-5'>
                    <span className='minCircle'><i class="bi bi-suit-heart"></i></span>
                    <span className='minCircle'></span>
                  </div>
                </div>
            </div>
              <div className='box'>

                {/* <button>Details</button> */}
               <div className='productLike'>
                  <p className='color-grey'>Twisted Shrimp</p>
                  <div className='d-flex gap-5'>
                    <span className='minCircle'><i class="bi bi-suit-heart"></i></span>
                    <span className='minCircle'></span>
                  </div>
                </div>
              </div>
              <div className='box'>

                {/* <button>Details</button> */}
               <div className='productLike'>
                  <p className='color-grey'>Twisted Shrimp</p>
                  <div className='d-flex gap-5'>
                    <span className='minCircle'><i class="bi bi-suit-heart"></i></span>
                    <span className='minCircle'></span>
                  </div>
                </div>
              </div>
              <div className='box'>

                {/* <button>Details</button> */}
               <div className='productLike'>
                  <p className='color-grey'>Twisted Shrimp</p>
                  <div className='d-flex gap-5'>
                    <span className='minCircle'><i class="bi bi-suit-heart"></i></span>
                    <span className='minCircle'></span>
                  </div>
                </div>
              </div>
              <div className='box'>

                {/* <button>Details</button> */}
               <div className='productLike'>
                  <p className='color-grey'>Twisted Shrimp</p>
                  <div className='d-flex gap-5'>
                    <span className='minCircle'><i class="bi bi-suit-heart"></i></span>
                    <span className='minCircle'></span>
                  </div>
                </div>
              </div>
           </div>
    </div>

                  


      {/*  */}
      <Dowland/>
      <Footer/>
    </div>
  )
}
