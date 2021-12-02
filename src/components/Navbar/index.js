import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import CV from '../../images/cv.pdf'

const Navbar = ({toggle}) => {
    const [scrollNav ,setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Nadim Rahman
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='speaker' smooth={true} duration={500} spy={true} exact='true' offset={0}>Intro</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='reason1' smooth={true} duration={500} spy={true} exact='true' offset={0}>#1</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='reason2' smooth={true} duration={500} spy={true} exact='true' offset={0}>#2</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='reason3' smooth={true} duration={500} spy={true} exact='true' offset={0}>#3</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='reason4' smooth={true} duration={500} spy={true} exact='true' offset={0}>#4</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='reason5' smooth={true} duration={500} spy={true} exact='true' offset={0}>#5</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to={CV} target="_blank" download>Download Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
