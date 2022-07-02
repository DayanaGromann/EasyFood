import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { sidebarData } from './SidebarData'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import {IconContext} from 'react-icons'
import Logout from '../LogoutButton'


function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  
  return (
    <>
      <IconContext.Provider value={{color: 'aqua'}}>
          <div className='navbar'>
              <Link to='#' className='menu-bars'>
                  <FaIcons.FaBars onClick={showSidebar}/>
              </Link>
             <h1>Easy Food</h1>
          </div>
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to = "#" className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {sidebarData.map((item, index) => {
                return(
                  <li key={index} className = {item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul> 
          </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar