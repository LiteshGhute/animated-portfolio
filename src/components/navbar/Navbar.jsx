import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

export default function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}
            >
                Portfolio
            </motion.span>
            <div className="social">
                <a href='#'>
                    <img src="/linkedin.svg" alt="" />
                </a>
                <a href='#'>
                    <img src="/github1.svg" alt="" />
                </a>
                <a href='#'>
                    <img src="/hackerrank.svg" alt="" />
                </a>
                <a href='#'>
                    <img src="/leetcode.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}
