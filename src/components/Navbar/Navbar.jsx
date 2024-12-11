import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {


  return (
    <>
<div className={` ${styles.navbar} navbar text-white bg-green-700`}>
  <div className="flex-1 ">
    <a className="btn btn-ghost text-xl">BizPage</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    
      
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
          
    </ul>
  </div>
</div>
    </>
  )
}