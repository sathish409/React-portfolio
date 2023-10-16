import React from 'react'
import profImg from '../assests/IMG-5718.jpg'

const Hero = () => {
  return (
    <section id='Home' className='container hero-section'>
        <div className='grid hero'>
            <div className='left flex'>
                <p>
                    Hi I'm <span>
                        Sathish Boga
                    </span>
                </p>
                <h3>
                    Software Engineer
                </h3>
                <p>
                    I love coding and teaching others
                </p>
               <button className='download-btn'>
                <a href='src/assests/RESUME.docx' download>Download CV<i class="fa-solid fa-download"></i>
                </a>  
                </button> 
            </div>



            <div className='right flex'>
                <div className='img-container'>

            <img src={profImg} alt='profile-picture'/>
                </div>
            </div>
        </div>
    </section>
  
    )
}

export default Hero