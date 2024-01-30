import React from 'react'
import './project.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "AWSGoat",
        img:"/AWSgoat.png",
        desc:"A Damn Vulnerable AWS Infrastructure",
        url:"https://github.com/ine-labs/AWSGoat"
    },
    {
        id: 2,
        title: "GCPGoat",
        img:"/GCPgoat.jpg",
        desc:"A Damn Vulnerable GCP Infrastructure",
        url:"https://github.com/ine-labs/GCPGoat"
    },
    {
        id: 3,
        title: "7-Days of Motivation",
        img:"/android.png",
        desc:"Android Application: 7-Days of Motivation",
        url:"https://www.amazon.com/gp/product/B09SGFTJGK?trk=public_profile_project-button"
    },

]

const Single = ({item}) => {
    const ref = React.useRef();
    const {scrollYProgress} = useScroll({target: ref,})
    const y = useTransform(scrollYProgress, [0,1],[-100,100])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt=''></img>
                </div>
                <motion.div className="textContainer" style={{y:y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Project</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Project = () => {
    const ref = React.useRef()
    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]})
    const scaleX = useSpring(scrollYProgress, {stiffness:100, damping: 30})
  return <div className='project' ref={ref}>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX: scaleX}} className='progressBar'></motion.div>
        </div>
        {items.map(item=>(<Single item={item} key={item.id}/>))}
        </div>
}

export default Project;