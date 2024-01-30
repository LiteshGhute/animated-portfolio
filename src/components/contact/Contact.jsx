import React from 'react'
import './contact.scss'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

export default function Contact() {
    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>abc@abc.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>abc street</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>83xxxxxxx</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                {/* <motion.img src='/phone.svg' className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
                </motion.img> */}
                {/* <motion.form action="" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4, duration:1}}> */}
                <motion.form>
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <textarea name='' id='' rows={6} placeholder='Message'></textarea>
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}
