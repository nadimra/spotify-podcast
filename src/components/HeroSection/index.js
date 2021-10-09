import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted playsinline src={Video} disablePictureInPicture type='video/mp4'/>
            </HeroBg>

            <HeroContent>
                <HeroH1>Hi, I'm Nad</HeroH1>
                <HeroP>Welcome to my portfolio website!</HeroP>
                <HeroBtnWrapper>
                    <Button
                    to='projects' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Continue {hover ? <ArrowForward /> :<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
