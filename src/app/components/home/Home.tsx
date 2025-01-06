import React from 'react'
import "./style.scss"
import { Star } from '@/app/utils/svg'
import rating from '@/app/assets/home/rating.svg'
import Image from 'next/image'
import img1 from "@/app/assets/home/homeicon1.png"
import img2 from "@/app/assets/home/homeicon2.png"
import img3 from "@/app/assets/home/homeicon3.png"
import video from "@/app/assets/home/video.png"

function Home() {
  return (
    <div className='home-cont'>
        <div>
        <div className="rating flex ">
            <Star/>
            <p className='px-4'>Google Rating</p>
            <Image src={rating} alt='img'/>
        </div>
        <div className='py-6'>
            <h3>Your trusted partner</h3>
            <h3>for compliance business needs</h3>
            <div className="line"></div>
        </div>
        <p className='text-gray2'>An online business compliance platform that helps entrepreneurs and <br /> other individuals with various, <strong>registrations</strong> , <strong>tax filings</strong>, and other <strong>legal <br /> matters</strong> .</p>

        <div className='boxcont flex items-center my-4'>
            <div className='flex items-center'>
                <div>
                <Image src={img1} alt='img' className='img-fluid'/>
                </div>
                <div className='ms-4'>
                    <h4>4.5+</h4>
                    <p className='text-gray2'>Customer Rating</p>
                </div>
            </div>
            <div className='flex items-center mx-10'>
                <div>
                <Image src={img2} alt='img' className='img-fluid'/>
                </div>
                <div className='ms-4'>
                    <h4>20,000+</h4>
                    <p className='text-gray2'>Clients</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                <Image src={img3} alt='img' className='img-fluid'/>
                </div>
                <div className='ms-4'>
                    <h4>99.8+</h4>
                    <p className='text-gray2'>Financial Stability</p>
                </div>
            </div>
        </div>

        <div className='flex mt-6'>
            <div>
            <button className='btn1'>Talk An Expert</button>
            </div>
            <div className='ml-6 flex items-center'>
                <Image src={video }alt='img' className='img-fluid'/>
                <h5 className='ms-3'>See how it works</h5>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Home