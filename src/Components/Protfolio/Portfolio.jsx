import React, { useState } from 'react'

export default function Portfolio() {

  const [data, setData] = useState([
    { img: '../../../public/chemistry-atom-luminous-model-vector-51005513.jpg', id: 'img1' },
    { img: '../../../public/bio-scan.jpg', id: 'img2' },
    { img: '../../../public/chemistry-atom-luminous-model-vector-51005513.jpg', id: 'img3' },
    { img: '../../../public/dynamic-blue-light-explosion-on-a-transparent-background-isolated-and-easy-to-edit-vector.jpg', id: 'img4' },
    { img: '../../../public/chemistry-atom-luminous-model-vector-51005513.jpg', id: 'img5' },
    { img: '../../../public/abstract-atom-particles-vector-illustration-600nw-558569515.webp', id: 'img6' },
  ])
  return <>
    <section className=' d-flex align-items-center justify-content-center portfolio'>
      <div>
        <h2 className='text-center text-white fw-bolder my-5'>PORTFOLIO COMPONENT</h2>
        <div className='icon-star text-center '>
          <i class="fa-solid fa-star text-white fa-xl"></i>
        </div>
        <div className="container">
          <div className='row g-5 my-5'>
            {data.map(item => <>
              <div className="col-md-4 ">
                <div className='portfolio-item'>
                  <img src={item.img} alt="" className='w-100 rounded-5 ' />
                  <div data-bs-toggle="modal" data-bs-target={'#' + item.id} className="plus rounded-5 ">
                    <i class="fa-solid fa-plus text-white "></i>
                  </div>
                </div>
              </div>
            </>)}
            {data.map(item => <>
              <div class="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-0">
                      <img src={item.img} className='w-100 rounded-2' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>)}
          </div>
        </div>
      </div>
    </section>

  </>
}
