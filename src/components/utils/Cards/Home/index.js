import React from 'react'
import './cardHome.css'

const CardHome = ({title, languages, startAt, endAt, role, level}) => {
    return (
        <div className="card-home">
            <img src="https://picsum.photos/100/100?grayscale" alt="aa" />
            <div className="informations">
                <div className="name">
                    <span>{title}</span>
                    <small>{startAt} - {endAt ? endAt: 'Atualmente'}</small>
                    <span>{role} - {level}</span>
                </div>
                <div className="frameworks">
                    {languages.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardHome
