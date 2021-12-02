import React, {useState} from 'react'

import { Button } from '../ButtonElement'
import { ReasonContainer, ReasonBg, VideoBg, ReasonContent, ReasonH1, ReasonP, ReasonBtnWrapper, ArrowForward, ArrowRight, Img, ImgWrap } from './ReasonElements'

const ReasonSection = ({id,reasonNumber, reason, nextId}) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ReasonContainer id={id}>
            <ReasonBg>
            </ReasonBg>

            <ReasonContent>
                <ReasonH1>Reason #{reasonNumber}</ReasonH1>
                <ReasonP>{reason}</ReasonP>
                <ReasonBtnWrapper>
                    <Button
                    to={nextId} 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={0}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    hasButton="true"
                    dark="true">
                        Continue {hover ? <ArrowForward /> :<ArrowRight/>}
                    </Button>
                </ReasonBtnWrapper>
            </ReasonContent>

        </ReasonContainer>
    )
}

export default ReasonSection
