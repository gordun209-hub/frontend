import './About.scss'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { urlFor, client } from '../../client'

const About = () => {
  const abouts = [
    {
      title: 'About Me',
      description:
        'I am a full-stack developer with a passion for building web applications. I have a background in business and marketing, and I am currently working as a full-stack developer at a startup in the San Francisco area.',
      image: ''
    },
    {
      title: 'About Me',
      description:
        'I am a full-stack developer with a passion for building web applications. I have a background in business and marketing, and I am currently working as a full-stack developer at a startup in the San Francisco area.',
      image: ''
    }
  ]

  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Css </span>
        <br />
        is
        <span> Horse SHit </span>
      </h2>
      <div className='app_profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='bold-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
