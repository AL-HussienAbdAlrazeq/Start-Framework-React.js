import React from 'react'

export default function Contact() {
  return <>
    <div className='w-75 m-auto' >
      <h2 className='text-white fw-bolder contact-h2 text-center my-5'>CONTACT SECTION </h2>
      <form className='my-5'>

        <label htmlFor="first_name">First-Name</label>
        <input type="text" id='first_name' placeholder=' first name' className='form-control mb-4 ' />


        <label htmlFor="last_name">Last-Name</label>
        <input type="text" id='last_name' placeholder=' last name' className='form-control  mb-4' />


        <label htmlFor="age">Age</label>
        <input type="number" id='age' placeholder='  age' className='form-control  mb-4' />


        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='email' className='form-control mb-4 ' />


        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder=' password' className='form-control mb-4 ' />


        <button className='btn btn-outline-info'>Send Message</button>
      </form>
    </div>

  </>
}
