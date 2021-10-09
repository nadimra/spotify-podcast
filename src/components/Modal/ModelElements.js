import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import ImageGallery from 'react-image-gallery';
import React from 'react'


export const Background = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
`
export const ModelContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 100%;
    
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;

    }
`

export const ModalWrapper = styled.div`
    width: 1000px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        width: 380px;
        height: 800px;
    }
    
`
export const ModalImg = styled.div`
    width: 400px;
    max-height: 350px;
    border-radius: 10px 0 0 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    @media screen and (max-width: 768px){
        width: 350px;
        margin-top: 20px;
    }
`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;

    line-height: 1.8;
    color: #141414;
    padding: 2.5rem;

    p{
        font-size: 13px;
        margin-bottom: 1rem;
        text-align: left;
    }


    @media screen and (max-width: 768px){
        p{
            font-size: 12px;
            margin-bottom: 1rem;
            text-align: left;
        }

    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const ButtonWrapper = styled.div`
    position: absolute;
    width: 1000px;
    height: 32px;

    @media screen and (max-width: 768px){
        width: 380px;
        height: 800px;
    }
`
export const CloseModalButton = styled(MdClose)`
    position: absolute; 
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding: 0;
    margin-left: auto;
    margin-right: 0px;
    float: right;
    right: 0;
    z-index: 200;
`