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
                    <SidebarLink to ="speaker" onClick={toggle}>Intro</SidebarLink>
                    <SidebarLink to ="reason1" onClick={toggle}>Reason #1</SidebarLink>
                    <SidebarLink to ="reason2" onClick={toggle}>Reason #2</SidebarLink>
                    <SidebarLink to ="reason3" onClick={toggle}>Reason #3</SidebarLink>
                    <SidebarLink to ="reason4" onClick={toggle}>Reason #4</SidebarLink>
                    <SidebarLink to ="reason5" onClick={toggle}>Reason #5</SidebarLink>
                    <SidebarLink to ="projects" onClick={toggle}>Projects</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
