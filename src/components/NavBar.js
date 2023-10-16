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
                <ul className='flex'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Skills'>Skills</Link>
                    </li>
                    <li>
                        <Link to='/Projects'>Projects</Link>
                    </li>
                   
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
                </div> 
              
        </nav>
    </header>
  )
}

export default NavBar