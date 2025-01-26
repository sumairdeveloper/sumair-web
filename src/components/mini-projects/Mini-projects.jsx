import React from 'react';
import './Mini-projects.css';
import TopDataText from '../shared-component/Topdata-text';
import Card from '../shared-component/Shared-component';
import { BsArrowBarRight } from 'react-icons/bs';
import image1 from '../../assets/currency.jpg';
import image2 from '../../assets/calculator.jpg';
import image3 from '../../assets/tic.jpg';
import image4 from '../../assets/rock.jpg';

const MiniProjects = () => {
    const cardDataLatestWork = [
        {
            image: image1,
            latestWorkCard: true,
            latestWorkCardHeading: 'Currency Exchange',
            latestWorklink: 'https://github.com/sumairdeveloper/currency',
        },
        {
            image: image2,
            latestWorkCard: true,
            latestWorkCardHeading: 'Calculator',
            latestWorklink: 'https://github.com/sumairdeveloper/calculator',
        },
        {
            image: image3,
            latestWorkCard: true,
            latestWorkCardHeading: 'Rock Paper Scissor',
            latestWorklink: 'https://github.com/sumairdeveloper/rock-paper-scissors',
        },
        {
            image: image4,
            latestWorkCard: true,
            latestWorkCardHeading: 'Tic Tac Toe',
            latestWorklink: 'https://github.com/sumairdeveloper/tic-tac-toe',
        },
    ];

    return (
        <div className="mywork">
            <div id="mywork">
                <div>
                    <TopDataText
                        topText="My Portfolio"
                        headingText="My Mini Projects"
                        descText="Welcome to my web portfolio! Explore some of my latest projects."
                    />
                </div>

                <div className="about-me-bottom-cards-services">
                    {cardDataLatestWork.map((item, index) => (
                        <Card
                            key={index}
                            image={<img src={item.image} alt={item.latestWorkCardHeading} className="project-img" />}
                            latestWorkCard={item.latestWorkCard}
                            latestWorkCardHeading={item.latestWorkCardHeading}
                            latestWorkSubHeadig="Web Design"
                            latestWorkIcon={<BsArrowBarRight />}
                            onClick={() => window.open(item.latestWorklink, '_blank')} // Navigate to the link on card click
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiniProjects;