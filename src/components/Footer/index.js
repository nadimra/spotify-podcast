import React from 'react'
import { FooterContainer, FooterWrap } from './FooterElements'
import {SocialMedia, SocialMediaWrap,SocialLogo,WebsiteRights} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Nadim Rahman
                        </SocialLogo>
                        <WebsiteRights>Nadim Rahman © {new Date().getFullYear()} All rights reserved.</WebsiteRights>

                       
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer
