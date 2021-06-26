import React from 'react'
import './nav.css'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="side-logo">
                    <span> <b>{'memelli.'}</b> </span>
                </div>
                <div className="side-nav">
                    <Link to="/">
                    <div className="side-nav-link">
                        <AiFillHome /><span>Home</span>
                    </div>
                    </Link>

                    <Link to="/repos">
                    <div className="side-nav-link">
                    <RiGitRepositoryFill /><span>Repositórios</span>
                    </div>
                    </Link>


                    <div className="side-nav-link">
                    <AiFillCode /><span>Side Projects</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
