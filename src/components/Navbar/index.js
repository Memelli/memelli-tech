import React from 'react'
import './nav.css'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
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

                    <Link to="/repos">
                        <div className="side-nav-link">
                            <MdEmail /><span>Contato</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
