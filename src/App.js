import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Info from './components/Info'
import Skills from './components/Skills'
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact'; 
import {routes, route} from "react-router-dom"
function App() {
  return (
   <> <input type="checkbox" id='darkMode' />
    <div className="wrapper">
      <label htmlFor="darkMode">
        <div className="dark-mode-toggle">
        <i class="fa-solid fa-circle-half-stroke"></i> 
        </div>
      </label>
      
<NavBar />
<Hero />
<Info />
<Skills/>
<Works />
<About/>
<Contact/>
</div>
</>
  );
}

export default App;
