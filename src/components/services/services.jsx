import React from 'react'
import './Services.css'
import TopDataText from '../shared-component/topdata-text'
import Card from '../shared-component/shared-component'
import { GiGlobeRing } from 'react-icons/gi'
import { CgCodeSlash, CgUiKit } from 'react-icons/cg'
import { BsApp } from 'react-icons/bs'
import { PiGraphicsCardDuotone } from 'react-icons/pi'

const Services = () => {
    const cardDataServices = [
        {
            cardheading: "Web Design",
            carddesc: "Web development is a process of builing",
            cardicon: <GiGlobeRing size={28}/>,
            cardReadMore: true
        },
        {
            cardheading: "Mobile App",
            carddesc: "BSCS from ABC UNI, Master",
            cardicon: <BsApp size={28}/>,
            cardReadMore: true
        },
        {
            cardheading: "UI/UX design",
            carddesc: "Build portfolio website.",
            cardicon: <CgUiKit size={28}/>,
            cardReadMore: true
        },
        {
            cardheading: "Graphics Design",
            carddesc: "Build portfolio website.",
            cardicon: <PiGraphicsCardDuotone size={28}/>,
            cardReadMore: true
        }
    ]
    return (
        <div className="services">
        <div id='services'>
            <div>
                <TopDataText
                    topText="What I offer"
                    headingText="My Services"
                    descText="I am a frontend developer based in Karachi, Pakistan.I am a frontend developer based in Karachi, PakistanI am a frontend developer based in Karachi, Pakistan."
                />
            </div>


            <div className='about-me-bottom-cards-services'>
                {cardDataServices.map((item, index) => {
                    return (

                        <   Card
                            cardHeading={item.cardheading}
                            cardDescription={item.carddesc}
                            cardIcon={item.cardicon}
                            className="card-services"
                            cardReadMore={item.cardReadMore}


                        />

                    )
                })}
            </div>
        </div></div>
    )
}

export default Services