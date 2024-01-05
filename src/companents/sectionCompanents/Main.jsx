import React from 'react';
import { Link } from 'react-router-dom';


export default function Main() {
  return (
    <div className='mainContainer'>
      <div className='mainBox'>
        <div className='mainBar'>
            <h1 className='font-700 text-24'>Popular stores</h1>
            <div>See all</div>
        </div>
           <div className='bigBox'>
           <Link to="/Category"> <div className='box'>
                <button>Details</button>
                <p className='color-grey'>Twisted Shrimp</p>
            </div></Link>
              <div className='box'>
                <button>Details</button>
                <p className='color-grey'>Twisted Shrimp</p>
              </div>
              <div className='box'>
                <button>Details</button>
                <p className='color-grey'>Twisted Shrimp</p>
              </div>
              <div className='box'>
                <button>Details</button>
                <p className='color-grey'>Twisted Shrimp</p>
              </div>
              <div className='box'>
                <button>Details</button>
                <p className='color-grey'>Twisted Shrimp</p>
              </div>
              <div className='box'>
              <button>Details</button>
                <p className='color-grey'>Twisted Shrimp</p>
              </div>
           </div>
      </div>
     <div className='cardFoot'>
        <div className='articleMain'>
                <h3 className='font-700 text-24'>How is it work?</h3>
                <div className='articleBox'>
                    <div className='box'>
                      
                    </div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
          </div>
            {/* <div className='article pt-50'>
                <div className='d-flex boxFoot'>
                      <div className='d-flex flex-column'>
                        <span className='font-700 text-36'>Download the ontheshelf. app <br/>and shop from anywhere!</span> <br />
                        <span className='color-grey'>The app is now available in different stores  <br/>supporting all systems!</span>
                      </div>
                      <div className='d-flex mt-20'>
                          <div className="appStore"></div>
                          <div className="appStore"></div>
                          <div className="appStore"></div>
                      </div>
                </div>
                <div  className='imgMain'>
                    <div></div>
                </div>
              </div> */}
     </div>
  </div>
  )
}
