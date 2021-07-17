import React from 'react'
import './cardAbout.css'

const CardAbout = ({ img, description, experiences }) => {
    return (
        <>
            <div className="photo">
                <img src={img} alt="aa" />
            </div>
            <div className="about">
                {description}
                <div className="experiences">
                    {experiences.map((item, index) => (
                        <span key={index} data-tooltip={item.time} data-tooltip-position="top">{item.name}</span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardAbout
