import React from 'react'
import './shared-component.css'

const TopDataText = (props) => {
    return (
        <div className='top-data-text'>
            <span>{props.topText}</span>

            <h1>{props.headingText}</h1>

            <p>{props.descText}</p>
        </div>
    )
}

export default TopDataText