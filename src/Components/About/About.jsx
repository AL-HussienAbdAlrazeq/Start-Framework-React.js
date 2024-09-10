import React from 'react'

export default function About() {
  return <>
    <section className='vh-100 d-flex align-items-center justify-content-center about'>
      <div>
        <h2 className='text-white fw-bolder text-center my-5'>ABOUT COMPONENT</h2>
        <div>
          <div className='icon-star text-center '>
            <i class="fa-solid fa-star text-white fa-xl"></i>
          </div>
        </div>
        <div className='container my-5'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-md-6 text-white'>
              <div>
                <img src="../../../public/image.png" alt="" className='about-image ' />
              </div>
            </div>
            <div className='col-md-6 text-white'>
              <div>
                <p className='about-para'>
                  React.js is a popular open-source JavaScript library used for building user interfaces,
                  particularly single-page applications (SPAs). Developed by Facebook, React allows developers to create fast,
                  scalable, and dynamic web applications by managing the view layer of the application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
