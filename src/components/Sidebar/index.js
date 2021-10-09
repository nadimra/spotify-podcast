import React from 'react'
import { SidebarContainer,Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to ="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
