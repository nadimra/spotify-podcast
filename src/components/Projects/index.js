import React, {useState} from 'react'
import { ProjectsContainer,ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectsSmall, ProjectsLanguages, ProjectBadge, BadgeList } from './ProjectElements'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'
import Icon4 from '../../images/icon4.svg'
import Icon5 from '../../images/icon5.svg'
import Icon6 from '../../images/icon6.svg'
import Icon7 from '../../images/icon7.svg'
import Icon8 from '../../images/icon8.svg'


import Modal from '../Modal/index'

import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix , projectSeven, projectEight} from './data'

const Project = () => {

    const [showModal, setShowModal] = useState(false);


    const openModal = (project) => {
        handleChange("name",project.name,"skills",project.skills,"description",project.description,"video", project.video, "content", project.content)
        setShowModal(prev => !prev);
    };


    const [state, setState] = useState({ name: "", skills: "" ,description: "",video: true,content: ""});
    const handleChange = (name, valueName, skills, valueSkills, description, valueDescription,video,valueVideo,content,valueContent) => {
        setState(prevState => ({
            ...prevState,
            [name]: valueName,
            [skills]: valueSkills,
            [description]: valueDescription,
            [video]: valueVideo,
            [content]: valueContent,
        }));
    };

    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal} currentProject={state}/>
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsSmall>Click each tile to find out more.</ProjectsSmall>

            <ProjectsWrapper>
                <ProjectsCard onClick={(e) => openModal(projectEight, e)}>
                    <ProjectsIcon src={Icon8}/>
                    <ProjectsH2>Hursley Experience</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Python</ProjectBadge>
                        <ProjectBadge>Cloud CI/CD</ProjectBadge>
                        <ProjectBadge>AR</ProjectBadge>
                        <ProjectBadge>+5</ProjectBadge>
                    </BadgeList>   

                    <ProjectsP>Create an app to improve visitor experience at Hursley museum</ProjectsP>

                </ProjectsCard>

                <ProjectsCard onClick={(e) => openModal(projectSeven, e)}>
                    <ProjectsIcon src={Icon7}/>
                    <ProjectsH2>Bartering App</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Python</ProjectBadge>
                        <ProjectBadge>HTML</ProjectBadge>
                        <ProjectBadge>Databases</ProjectBadge>
                        <ProjectBadge>+2</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>Creation of a Django trading services application</ProjectsP>
                </ProjectsCard>

                <ProjectsCard onClick={(e) => openModal(projectSix, e)}>
                    <ProjectsIcon src={Icon6}/>
                    <ProjectsH2>PolyRacer</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Unity</ProjectBadge>
                        <ProjectBadge>C#</ProjectBadge>
                        <ProjectBadge>Firebase</ProjectBadge>
                        <ProjectBadge>+1</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>3D platformer game with multiple levels and online leaderboards</ProjectsP>
                </ProjectsCard>

                <ProjectsCard  onClick={(e) => openModal(projectFive, e)}>
                    <ProjectsIcon src={Icon5}/>
                    <ProjectsH2>Video2PDF</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Machine Learning</ProjectBadge>
                        <ProjectBadge>+4</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>Create a program that summarizes football matches into a PDF</ProjectsP>
                </ProjectsCard>

                <ProjectsCard onClick={(e) => openModal(projectFour, e)}>
                    <ProjectsIcon src={Icon4}/>
                    <ProjectsH2>RunApp</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Java</ProjectBadge>
                        <ProjectBadge>Mobile</ProjectBadge>
                        <ProjectBadge>Firebase</ProjectBadge>
                        <ProjectBadge>+1</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>Create a fitness tracker app for Android phones with online functionality</ProjectsP>
                </ProjectsCard>

                <ProjectsCard  onClick={(e) => openModal(projectThree, e)}>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>ManageMyStudies</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Python</ProjectBadge>
                        <ProjectBadge>HTML</ProjectBadge>
                        <ProjectBadge>Databases</ProjectBadge>
                        <ProjectBadge>+2</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>Web application used to organise my personal work and education</ProjectsP>
                </ProjectsCard>

                <ProjectsCard  onClick={(e) => openModal(projectTwo, e)}>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>OutSmart</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Python</ProjectBadge>
                        <ProjectBadge>HTML</ProjectBadge>
                        <ProjectBadge>Databases</ProjectBadge>
                        <ProjectBadge>+2</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>Create an ecommerce website for artists to manage/sell their work</ProjectsP>
                </ProjectsCard>

                <ProjectsCard onClick={(e) => openModal(projectOne, e)}>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>IBM Educational Game</ProjectsH2>
                    <BadgeList>
                        <ProjectBadge>Unity</ProjectBadge>
                        <ProjectBadge>C#</ProjectBadge>
                        <ProjectBadge>AI</ProjectBadge>
                        <ProjectBadge>+4</ProjectBadge>
                    </BadgeList>  
                    <ProjectsP>Create an online multiplayer game on the Unity platform using the IBM Watson API</ProjectsP>
                </ProjectsCard>

            </ProjectsWrapper>

        </ProjectsContainer>
        </>
    )
}

export default Project
