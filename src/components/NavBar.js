import React from 'react'

const NavBar = () => {
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
                        <a href='#Home'>Home</a>
                    </li>
                    <li>
                        <a href='#Skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#Projects'>Projects</a>
                    </li>
                   
                    <li>
                        <a href='#About'>About</a>
                    </li>
                    <li>
                        <a href='#Contact'>Contact</a>
                    </li>
                </ul>
                </div> 
        </nav>
    </header>
  )
}

export default NavBar