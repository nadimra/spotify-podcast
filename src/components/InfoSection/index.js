import React from 'react'
import {Button} from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'


const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine[0]}</TopLine>
                            <Heading lightText={lightText}>{headline[0]}</Heading>
                            <Subtitle darkText={darkText}>{description[0]}</Subtitle>
                        </TextWrapper>

                        <TextWrapper>
                            <TopLine>{topLine[1]}</TopLine>
                            <Heading lightText={lightText}>{headline[1]}</Heading>
                            <Subtitle darkText={darkText}>{description[1]}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
