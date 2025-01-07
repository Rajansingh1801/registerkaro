import Header from '@/app/components/header/Header'
import Home from '@/app/components/home/Home'
import Services from '@/app/components/services/Services'
import Tursted from '@/app/components/trusted/Tursted'
import React from 'react'

function Page() {
  return (
    <>
    <Header/>
    <Home/>
    <Tursted/>
    <Services/>
    </>
  )
}

export default Page