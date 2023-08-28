import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
      <nav>
      <NavContent setMenuOpen={setMenuOpen}/>
      
    </nav>
    <button className='navBtn' onClick={()=>{setMenuOpen(!menuOpen)}}>
        <AiOutlineMenu/>
      </button>
    </>
  )
}

export const NavResponsive = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen?"navPhoneOpen":""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export const NavContent=({setMenuOpen})=>(
    <>
        <h2>Girish Rao</h2>
        <div>
            <a  onClick={()=>{setMenuOpen(false)}} href='#home'>Home</a>
            <a  onClick={()=>{setMenuOpen(false)}} href='#work'>Work</a>
            <a  onClick={()=>{setMenuOpen(false)}} href='#timeline'>Timeline</a>
            <a  onClick={()=>{setMenuOpen(false)}} href='#services'>services</a>
            <a  onClick={()=>{setMenuOpen(false)}} href='#contact'>Contact</a>
        </div>
        <a href='mailto:raogirish257@gmail.com' onClick={()=>{setMenuOpen(false)}}>
            <button>Email</button>
        </a>
    </>
);

export default Header
