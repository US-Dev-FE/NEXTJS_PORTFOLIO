import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
    return (
        <motion.div className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>About Me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none '>
                    <Image src={assets.user} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }} className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Frontend Developer with 6+ years of experience crafting fast, scalable web applications across fintech, e-commerce, and logistics. I specialize in Web Development, TypeScript, and component-driven architecture, with a strong focus on UI performance, code reusability, and clean design.

                        I’ve led multiple frontend teams, built modular design systems, and collaborated across product, backend, and DevOps to deliver impactful solutions — improving delivery speed by up to 35% and user satisfaction by 25%+.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map((info, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                key={index} className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-lightHover  hover:-translate-y-1 duration-500
                            ${isDarkMode ? 'border-white bg-darkHover box-shadow-white' : 'box-shadow-black'}`}>
                                <Image src={isDarkMode ? info.iconDark : info.icon} alt={info.title} className='w-7 mt-3' />
                                <h3 className={`my-4 font-semibold text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>{info.title}</h3>
                                <p className={`text-gray-600 text-sm ${isDarkMode ? 'text-white/80' : ''}`}>{info.description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }} className={`my-6 text-gray-700 font-Ovo ${isDarkMode ? 'text-white/80' : ''} `}>Tools I Use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }} key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                            rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default About
