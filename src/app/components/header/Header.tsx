import { HeaderLine } from '@/app/utils/svg'
import "./style.scss"
import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import logo from "@/app/assets/header/header.png"
import Image from 'next/image'
import { IoChevronDown } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
function Header() {
    return (
        <>
            <header>
                <div className="uppheader w-full px-12 flex justify-end bg-primary py-2">
                        <div className='flex items-center'>
                            <HiOutlineMail color='white' size={18}/> <p className='px-3 text-white'>www.registerkaro.com</p>  <HeaderLine />
                        </div>
                        <div className='flex items-center px-3'>
                            <FaPhone color='white' size={18}/> <p className='px-3 text-white'>+98776543210</p>  <HeaderLine />
                        </div>
                        <div className='flex items-center px-3'>
                            <FaInstagram color='white' size={18} className='mx-2'/> <FaFacebook color='white' size={18} className='mx-2'  /> <FaTwitter color='white' size={18} className='mx-2' /> <FaPinterestP color='white' size={18} className='mx-2' /> 
                        </div>
                </div>
                <div className="mainheader flex justify-between">
                    <div>
                        <Image src={logo} alt='img' className='img-fluid'/>
                    </div>
                    <div className='flex items-center allsubbar'>
                        <p>Home</p>
                        <p className='flex items-center'>Our Services <IoChevronDown /></p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p><CiSearch size={24} /></p>
                        <button className='pl-6'>Talk An Expert</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header