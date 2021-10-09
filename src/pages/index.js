import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

import { homeObjOne, homeObjTwo } from '../components/InfoSection/data'
import { projectOne } from '../components/Projects/data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <Projects />
        <InfoSection {...homeObjTwo}/>

        <Footer />
        </>
    )
}

export default Home
