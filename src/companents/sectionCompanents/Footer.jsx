import React from 'react'

export default function Footer() {
  return (
    <div className='footerContainer'>
        <div className='foot'>
            <div className=' d-flex gap-20 flex-column'>
              <div className='fotSvg'>
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                  </svg>
                </span>
                  <a href="#" className='color-w font-700'>onthelshelf.</a>
              </div>
              <p className='text-14'>Fresh goods delivered to your doorstep</p>
                  <ul className='d-flex gap-20'>
                      <li>
                          <i class="bi bi-instagram"></i>
                      </li>
                      <li>
                      <i class="bi bi-facebook"></i>
                      </li>
                      <li>
                      <i class="bi bi-twitter"></i>
                      </li>
                  </ul>
              </div>
              
              <div className='icon'>
                  <i></i>
                  
            </div>
            <div className='d-flex flex-column'>
                <p className='text-12'>Need help?</p>
                <p>Our support is here for you 24/7</p>
                <div className='d-flex flex-column mt-20'>
                  <div className='d-flex '>
                    <i class="bi bi-phone"></i>
                    <span className='text-20'>(+123) 000 111 222 333</span>
                  </div>
                  <div className='d-flex'>
                    <i class="bi bi-envelope"></i>
                    <a href="#" className='color-w'>ontheshelf@uizard.io</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
