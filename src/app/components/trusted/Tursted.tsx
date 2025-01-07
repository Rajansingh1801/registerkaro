import React from 'react'
import img1 from "@/app/assets/trusted/t1.png"
import img2 from "@/app/assets/trusted/t2.png"
import img3 from "@/app/assets/trusted/t3.png"
import img4 from "@/app/assets/trusted/t4.png"
import img5 from "@/app/assets/trusted/t6.png"
import img6 from "@/app/assets/trusted/t8.png"
import Image from 'next/image'
import "./style.scss"

function Tursted() {
  return (
    <div className='trusted text-center'>
        <h4>Trusted By Over 100+ Startups and freelance business</h4>
        <div className='flex items-center justify-center mt-9'>
            <Image src={img1} alt='img' className='img-fluid'/>
            <Image src={img2} alt='img' className='img-fluid'/>
            <Image src={img3} alt='img' className='img-fluid'/>
            <Image src={img4} alt='img' className='img-fluid'/>
            <Image src={img5} alt='img' className='img-fluid'/>
            <Image src={img6} alt='img' className='img-fluid'/>
        </div>
    </div>
  )
}

export default Tursted