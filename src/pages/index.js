import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import ReasonSection from '../components/ReasonSection'
import InfoSection from '../components/InfoSection'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

import { speakerObj, reasonOneContentObj, reasonTwoContentObj,reasonThreeContentObj,reasonFourContentObj,reasonFiveContentObj, wrappedObj } from '../components/InfoSection/data'
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
        <InfoSection {...speakerObj}/>
        <ReasonSection id={"reason1"} reasonNumber={1} reason={"I love music."} nextId="reasonOneContent"/>
        <InfoSection {...reasonOneContentObj}/>
        <ReasonSection id={"reason2"} reasonNumber={2} reason={"I love the company culture."} nextId="reasonTwoContent"/>
        <InfoSection {...reasonTwoContentObj}/>
        <ReasonSection id={"reason3"} reasonNumber={3} reason={"I love the app."} nextId="reasonThreeContent"/>
        <InfoSection {...reasonThreeContentObj}/>
        <ReasonSection id={"reason4"} reasonNumber={4} reason={"I love to learn."} nextId="reasonFourContent"/>
        <InfoSection {...reasonFourContentObj}/>
        <ReasonSection id={"reason5"} reasonNumber={5} reason={"I love technology."} nextId="reasonFiveContent"/>
        <InfoSection {...reasonFiveContentObj}/>
        <InfoSection {...wrappedObj}/>

        <Projects />

        <Footer />
        </>
    )
}

export default Home
