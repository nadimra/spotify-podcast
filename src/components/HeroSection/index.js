import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import ImgLogo from '../../images/illustration-logo.png'

import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroSmall, HeroBtnWrapper, ArrowForward, ArrowRight, Img, ImgWrap } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
            </HeroBg>

            <HeroContent>
                <ImgWrap>
                    <Img src={ImgLogo} alt={"Logo"}/>
                </ImgWrap>
                <HeroH1>Podcast: Why Spotify?</HeroH1>
                <HeroP>Five reasons why I want to work for Spotify.</HeroP>
                <HeroSmall>(Click the buttons to continue)</HeroSmall>
                <HeroBtnWrapper>
                    <Button
                    to='speaker' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={0}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    hasButton = "true"
                    dark="true">
                        Play {hover ? <ArrowForward /> :<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
