import React from 'react'

const Contact = () => {
  return (
    <section id='Contact' className='Contact'>
        <h2 className='title'>Contact me</h2>
        <div className="container">
            <div className="socials flex">
                <a href="">
                    <i className='fa-brands fa-facebook'></i>
                </a>
                <a href="">
                    <i className='fa-brands fa-instagram'></i>
                </a>
                <a href="">
                    <i className='fa-brands fa-linkdin'></i>
                </a>
                <a href="">
                    <i className='fa-brands fa-github'></i>
                </a>
                
            </div>
            <div className="email-container">
                <input type="text" placeholder='email address' />
                <i class="fa-solid fa-paper-plane"></i>

            </div>
        </div>
    </section>
  )
}

export default Contact