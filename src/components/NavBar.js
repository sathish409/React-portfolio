import  { useState } from 'react'
const NavBar = () => {
const [showMenu, setShowMenu]=useState(false);
  return (
    <header>
        <nav className='container flex navigation'>
          <div className='flex nav-left'>
            <h1>Sathish</h1>
            <div className='line'>Soft.Engineer</div>
            </div>
            
            <div className='menu'>
               <div className="hamburger">
                {showMenu ?(
                    <i class="fa-solid fa-xmark" onClick={()=>setShowMenu(false)}></i>
                ):(<i class="fa-solid fa-bars" onClick={()=>setShowMenu(true)}></i>
                )}
                </div> 
                <ul className={showMenu ? "flex slide":"flex" }onClick={()=>setShowMenu(false)}>
                <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
                </ul>
                </div> 
              
        </nav>
    </header>
  )
}

export default NavBar