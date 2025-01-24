import React from 'react'
import './aboutme.css'
import aboutMeImage from '../../assets/OIP (1).jpg'
import Card from '../shared-component/shared-component'
import { BiCodeAlt } from 'react-icons/bi'
import { CgCodeSlash } from 'react-icons/cg'
import { VscVscode } from 'react-icons/vsc'
import { IoGitMerge, IoLanguageSharp, IoLogoFigma, IoLogoFirebase } from 'react-icons/io5'
import { DiMongodb } from 'react-icons/di'
import { FaGraduationCap } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'

const AboutMe = () => {

    const cardData = [
        {
            cardheading: "Languages",
            carddesc: "HTML5, CSS3, JS, REACTJS",
            cardicon: <IoLanguageSharp size={28} />
        },
        {
            cardheading: "Education",
            carddesc: "BSCS from ABC UNI, Master",
            cardicon: <FaGraduationCap size={28}/>
        },
        {
            cardheading: "Projects",
            carddesc: "Build portfolio website.",
            cardicon: <GoProject size={28} />
        }
    ]

    const toolsIcons = [
        <VscVscode size={45} color='blue' />,
        <IoLogoFirebase size={45} color='yellow' />,
        <DiMongodb size={45} color='green' />,
        <IoLogoFigma size={45} color='lightblue' />,
        <IoGitMerge size={45} color='red' />

    ]
    return (
        <div className='about-me' id='aboutme'>
            <div className='about-me-top'>
                <span>Introduction</span>
                <h1>About Me</h1>
            </div>


            <div className='about-me-bottom'>
                <div className='about-me-bottom-image'>
                    <img src={aboutMeImage} className='about-me-image' />
                </div>


                <div className='about-me-bottom-right'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis rem enim blanditiis deleniti ipsam molestiae quos ut ratione aliquam! Accusamus, totam dignissimos maxime obcaecati ipsum non sit perspiciatis eligendi? Minima!
                    </p>

                    <div className='about-me-bottom-cards'>
                        {cardData.map((item, index) => {
                            return (

                                <Card
                                    cardHeading={item.cardheading}
                                    cardDescription={item.carddesc}
                                    cardIcon={item.cardicon}
                                    className="card"
                                />

                            )
                        })}
                    </div>



                    <span>Tools I use</span>

                    <div className='about-me-bottom-tools-container'>
                        {toolsIcons.map((item, index) =>

                            <span className='about-me-bottom-tools'>
                                {item}
                            </span>

                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutMe