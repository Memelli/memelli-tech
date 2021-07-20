import React from 'react'
import './about.css'
import { aboutPageData } from '../../components/utils/data/Data'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import axios from 'axios'

const About = () => {
    const data = aboutPageData
    return (
        <>
            
            <div className="about-page">
                <div className="user">
                    <div className="details">
                        <h1>Heyy, prazer, sou o {data.user.lastName}!</h1>
                        <p>{data.user.description}</p>
                        <div className="social-media">
                            {data.socialMedia.map(item => (
                                <Link to={item.to} key={item.name} className="icon">
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="experiences">
                    <div className="titulo"><h1>Experiências</h1></div>
                    <div className="languages">
                        {data.experiences.map(item => (
                            <div className="card">
                                <div>{item.icon}</div>
                                <div className="info">
                                    <p>{item.name}</p>
                                    <p>{item.initAt} - {item.endAt}</p>
                                    <p>{item.seniority}, {item.experienceTime} exp.</p>
                                    <p>{item.prominence}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="certificates">
                    <div className="titulo"><h1>Certificados</h1></div>
                    <div className="list">
                        {data.certificates.map((item, index) => (
                        <div className="certificate" key={index}>
                            <img src={item.screen} alt={item.name} />
                            <div className="float">
                                <p>{item.language}</p>
                                <p>{item.prominence}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About