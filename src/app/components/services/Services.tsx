"use client"
import React, { useEffect, useState } from 'react'
import "./style.scss"
import Data from "./data"
import Image from 'next/image';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function Services() {
    interface DataType {
        index: number;
        heading: string;
        details: string;
        img1: any;
    }
    const [data, setData] = useState<DataType[] | undefined>();
    useEffect(() => {
        setData(Data)
    }, [])
    return (
        <div className='Services'>
            <div className="heading text-center">
                <p>WELCOME TO REGISTERKARO.IN</p>
                <h3>Explore Our Services</h3>
            </div>

            <div className='my-8'>
                <div className='flex flex-row w-full flex-wrap'>
                    {
                        data?.map((item, index) => {
                            return (
                                <div className={item.index !=1 && item.index !=4?'basis-1/3 main-cont bl':"basis-1/3 main-cont"}>
                                    <div className="cont">
                                        <div>
                                            <Image src={item.img1} alt='img' className='img-fluid' />
                                        </div>
                                        <h6>{item.heading}</h6>
                                        <p>{item.details}</p>
                                        {
                                            item.index == 2 &&(
                                                <>
                                                <div className="tf"></div>
                                                <div className="tff"></div>
                                                </>
                                            )

                                        }
                                        {
                                            item.index == 5 &&(
                                                <>
                                                <div className="tf"></div>
                                                <div className="tff"></div>
                                                </>
                                            )

                                        }
                                        <div>
                                            <button className='flex items-center'>Learn More &nbsp;  <FaRegArrowAltCircleRight /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='btn1'>See All Services</button>
            </div>
        </div>
    )
}

export default Services