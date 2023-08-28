import React from 'react'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assets/self.png"
export default function Homepage() {
    
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        }
      };
  return (
    <>
      <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>Hii, I am<br/>M.Girish Rao</motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A designer", "A coder"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor:""
            }}
          />
          <div>
            <a href="mailto:raogirish257@gmail.com">Hire me</a>
            <a href="#work">Projects <BsArrowUpRight/></a>
          </div>
          
        </div>
      </section>
      <section>
        <img src={me} alt=""/>
      </section>
      <BsChevronDown/>
    </div>
    </>
  )
}
