import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x:-500, 
        opacity:0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren:0.1,
        }
    },
}

const sliderVariants = {
    initial: {
        x:0, 
    },
    animate: {
        x: "-400%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration:30,

        }
    },
}

export default function Hero() {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>LITESH GHUTE</motion.h2>
                <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>Download CV</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.div variants={textVariants} className='image-wrapper'>
                    Welcome to my profile<motion.img src='/hi.png' variants={textVariants}>
                    </motion.img>
                </motion.div>
            </motion.div>
        </div>
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
        Leader Programmer Coder
        </motion.div>
        <div className="imageContainer">
            <img src="/liteshghute1.png" alt="" />
        </div>
    </div>
  )
}
