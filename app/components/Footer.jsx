import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = ({ isDarkMode }) => {
  const whatsappNumber = '919929969577'; // 👈 Replace with your number

  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto mb-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          us.sharmautkarsh@outlook.com
        </div>

        {/* ✅ WhatsApp section */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-max flex items-center gap-2 mx-auto  hover:text-green-800"
        >
          <FaWhatsapp className="w-5 h-5" />
          +91 9929969577
        </a>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t border-gray-400
       mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Utkarsh Sharma. All rights reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              target='_blank'
              href='https://github.com/US-Dev-FE'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-slate-800'
            >
              <FaGithub className='w-5 h-5' />
              GitHub
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/utkarsh-sharma-a73684137'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-blue-700'
            >
              <FaLinkedin className='w-5 h-5' />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href={`https://wa.me/${whatsappNumber}`}
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-green-800'
            >
              <FaWhatsapp className='w-5 h-5' />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
