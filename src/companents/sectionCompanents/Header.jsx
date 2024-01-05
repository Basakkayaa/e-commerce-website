import React from 'react'
import { Link } from 'react-router-dom';




export default function Header() {
  return (
    <div className='container containerBg'>
        <div className='headerBox'>
            <div className='d-flex gap-20'>
               <i class="bi bi-basket2-fill icon"></i>
                <a href="#" className='color-w'>onthelshelf.</a>
            </div>
            <div className='list'>
              <span className='lang'><a href="#" className='color-w'>US</a></span>
              <button className='btn bg'><a href="#" className='color-w'>Create an account</a></button>
            </div>
        </div>
        <div className='headerSearch'>
          <h1 className='head'>Fresh goods delivered to your doorstep!</h1>
          <form action="#">
            <div className='ocean'></div>
            <Link to="/about" element="About">
            <input  id='inputHeader'  className='inputHeader'  type="search" placeholder='Enter your address to see delivery options'/>
            </Link>
              <div className='iconSearch'>
                <i class="bi bi-search bi-icon"></i>
              </div>
          </form>
        </div>
        <div className="headerMenu">
          <div className='boxMenu'>
              <div className="row">
                <div className='card'>
                  <i className='svg1'>
                    <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', overflow: 'visible', opacity: 1, zIndex: 1, fill: 'rgb(60, 57, 223)' }}>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="m21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9 1.05 4.37c.10.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41a1.42 1.42 0 0 1-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.60 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"></path></svg>
                    </i>
                  <div>
                    <h3 className='font-700 text-18'>80 stores</h3>
                    <p className='color-grey'> All around the country</p>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className='card'>
                  <i className='svg1'>
                    <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', overflow: 'visible', opacity: 1, zIndex: 1, fill: 'rgb(60, 57, 223)' }}>
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8 14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                  </i>
                  <div>
                    <h3 className='font-700 text-18'>80 stores</h3>
                    <p className='color-grey'> All around the country</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='card'>
                    <i className='svg1'>
                    <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', overflow: 'visible', opacity: 1, zIndex: 1, fill: 'rgb(60, 57, 223)' }}>
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                        </svg>

                    </i>
                      <div>
                        <h3 className='font-700 text-18'>80 stores</h3>
                        <p className='color-grey'>  All around the country</p>
                      </div>
                  </div>
              </div>
              <div className="row">
              <div className='card'>
                  <i className='svg1'>
                      <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', overflow: 'visible',  opacity: 1, zIndex: 1, fill: 'rgb(60, 57, 223)' }}><path d="M0 0h24v24H0V0z" fill="none" />
                                  <path d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z" /></svg>
                              </i>
                      <div>
                        <h3 className='font-700 text-18'>80 stores</h3>
                        <p className='color-grey'> All around the country</p>
                      </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
