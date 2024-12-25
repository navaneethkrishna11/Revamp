import Footer from '@/components/page.jsx/Footer'
import Header from '@/components/page.jsx/Header'
import HomeAbout from '@/components/page.jsx/HomeAbout'
import MiddlePage from '@/components/page.jsx/MiddlePage'
import Navbar from '@/components/page.jsx/Navbar'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <MiddlePage/>
      <HomeAbout/>
      <Footer/>
    </div>
  )
}
