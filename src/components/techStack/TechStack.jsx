import React from 'react'
import './techStack.scss'
import { animate, motion } from 'framer-motion'

const variants = {
    initial: {
        x:-50,
        y:100,
        opacity: 0
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

export default function TechStack() {
    return (
        <motion.div className='techStack' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer">
                <p>I believe in constant learning
                    <br /> and growing.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <span>B.Tech Computer Science and Engineering (Hons.)</span>
                <br/>
                <p>@Lovely Professional University</p>
                <br/>
                <p>Score: 89.40%</p>
            </motion.div>


            <motion.div variants={variants}>
                <span className='skillText'>Skills</span>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <div className="box">
                    <h3>Web Dev</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Flask</li>
                    </ul>
                    
                </div>
                <div className="box">
                    <h3>DevOps</h3>
                    <ul>
                        <li>Docker</li>
                        <li>AWS</li>
                        <li>Azure</li>
                        <li>GCP</li>
                        <li>Terraform</li>
                        <li>Git</li>
                    </ul>
                    
                </div>
                <div className="box">
                    <h3>Other</h3>
                    <ul>
                        <li>Python Programming</li>
                        <li>Android Dev</li>
                        <li>Kotlin</li>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Linux</li>
                        <li>Machine Learning</li>
                    </ul>
                    
                </div>
            </motion.div>
        </motion.div>
    )
}
