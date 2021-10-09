import React, {useRef, useEffect, useCallback} from 'react'
import {useSpring, animated} from 'react-spring'
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton, ModelContentContainer,ButtonWrapper,Img } from './ModelElements'




export const Modal = ({showModal, setShowModal, currentProject}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if(modalRef.current == e.target){
            setShowModal(false)
        }
    }

    return (
        <>
        {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrapper>
                        <ModelContentContainer>
                            {currentProject.video ? (
                            <ModalImg>
                            <iframe width="400" height="350" src={currentProject.content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ModalImg>
                            ):
                            <ModalImg>
                            <Img src={currentProject.content} alt="Project content"/>
                            </ModalImg>
                            }

                            <ModalContent>
                                <h2>{currentProject.name}</h2>
                                <p><b>Skills involved:</b> {currentProject.skills} </p>
                                <p><b>Description:</b> {currentProject.description}</p>
                            </ModalContent>
                            <ButtonWrapper>

                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}></CloseModalButton>
                            </ButtonWrapper>
                        </ModelContentContainer>

                    </ModalWrapper>
                </animated.div>
            </Background>

        ):null}

        </>
    )
    
} 


export default Modal
