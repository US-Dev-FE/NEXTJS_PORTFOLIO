import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({isDarkMode}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
    <motion.h4 initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>
    <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-Ovo'>My Services</motion.h2>
    <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                 className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>
                        Helping startups and enterprises build high-performing, future-ready web applications that users love.
                        
                        Always open to meaningful connections, collaboration, or new opportunities. Let’s build something great!
                    </motion.p>
    <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map((service, index)=>(
            <motion.div whileHover={{scale: 1.05}} key={index} className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer bg-lightHover hover:-translate-y-1 duration-500
             ${isDarkMode ? 'border-white bg-darkHover box-shadow-white' : 'box-shadow-black'}`}>
                <Image src={service.icon} alt='' className='w-10'/>
                <h3 className={`text-lg my-4 text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>{service.title}</h3>
                <p className={`text-sm text-gray-600 leading-5 ${isDarkMode ? 'text-white/80' : ''}`}>{service.description}</p>
                <a href={service.link} className='flex items-center gap-2 text-sm mt-5'>Read More
                    <Image src={assets.right_arrow} className='w-4'alt=''/>
                </a>
            </motion.div>
        ))}
    </motion.div>

    </motion.div>
  )
}

export default Services
