import React from 'react'
import {AiOutlineArrowUp,AiFillYoutube, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <div>
        
        <h2>M. Girish Rao</h2>
        <p>Discipline beats motivation every single time</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
            <a href='#'>
              <AiFillInstagram/>
            </a>
            <a href='https://github.com/Girish209'>
              <AiFillGithub/>
            </a>
        </article>
      </aside>
      <a href='#home'>
        <AiOutlineArrowUp/>
      </a>
    </footer>
  )
}

export default Footer
