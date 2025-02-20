
import React from 'react'
import './My-work.css'
import TopDataText from '../shared-component/Topdata-text'
import Card from '../shared-component/Shared-component'
import picture from '../../assets/OIP.jpg'
import { BsArrowBarRight } from 'react-icons/bs'
import { CgCodeSlash } from 'react-icons/cg'
import image1 from '../../assets/web.jpg'
import image2 from '../../assets/app.jpg'
import image3 from '../../assets/mob.jpg'
import image4 from '../../assets/d app.jpg'

const MyWork = () => {

    const cardDataLatestWork = [
        {
            image: image1,
            latestWorkCard: true,
            latestWorkCardHeading: "Web Development"
        },
        {
            latestWorkCard: true,
            image: image2,
            latestWorkCardHeading: "App Dev"
        },
        {
            latestWorkCard: true,
            image: image3,
            latestWorkCardHeading: "Mobile Prog"

        },
        {
            latestWorkCard: true,
            image: image4,
            latestWorkCardHeading: "Destop Apps"
        }
    ]
    return (
        <div className="mywork">
        <div id='mywork'>
            <div>
                <TopDataText
                    topText="My portfolio"
                    headingText="My Latest Work"
                    descText="Welcome to my web portfolio Welcome to my web portfolio Welcome to my web portfolio"

                />
            </div>


            <div className='about-me-bottom-cards-services'>
                {cardDataLatestWork.map((item, index) => {
                    return (

                        <Card
                            image={item.image}
                            latestWorkCard={item.latestWorkCard}
                            latestWorkCardHeading={item.latestWorkCardHeading}
                            latestWorkSubHeadig="Web Design"
                            latestWorkIcon={<BsArrowBarRight />}

                        />
                    )
                })}
            </div>

        </div></div>
    )
}

export default MyWork
