import React from 'react'
import './about.css'
import { aboutPageData } from '../../components/utils/data/Data'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'

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
                        <div className="card">
                            <div><FaReact className="icon" /></div>
                            <div className="info">
                                <p>React</p>
                                <p>Jan/19 - Abr/19</p>
                                <p>Jr, 2 anos exp.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div><FaReact className="icon" /></div>
                            <div className="info">
                                <p>React</p>
                                <p>Jan/19 - Abr/19</p>
                                <p>Jr, 2 anos exp.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div><FaReact className="icon" /></div>
                            <div className="info">
                                <p>React</p>
                                <p>Jan/19 - Abr/19</p>
                                <p>Jr, 2 anos exp.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div><FaReact className="icon" /></div>
                            <div className="info">
                                <p>React</p>
                                <p>Jan/19 - Abr/19</p>
                                <p>Jr, 2 anos exp.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certificates">
                    <div className="titulo"><h1>Certificados</h1></div>
                    <div className="list">
                        <div className="certificate">
                            <img src="https://picsum.photos/300/150?grayscale" alt=""/>
                            <div className="float">
                                <p><FaReact /></p>
                                <p><FaReact /></p>
                            </div>
                        </div>
                        <div className="certificate">
                            <img src="https://picsum.photos/300/150?grayscale" alt=""/>
                            <div className="float">
                                <p><FaReact /></p>
                                <p><FaReact /></p>
                            </div>
                        </div>
                        <div className="certificate">
                            <img src="https://picsum.photos/300/150?grayscale" alt=""/>
                            <div className="float">
                                <p><FaReact /></p>
                                <p><FaReact /></p>
                            </div>
                        </div>
                        <div className="certificate">
                            <img src="https://picsum.photos/300/150?grayscale" alt=""/>
                            <div className="float">
                                <p><FaReact /></p>
                                <p><FaReact /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About