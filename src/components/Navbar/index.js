import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { navData } from '../utils/data/Data'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="side-logo">
                    <span> <b>{'memelli.'}</b> </span>
                </div>
                <div className="side-nav">
                    {navData.map((item, index) => (
                        <div key={index}>
                            {item.disabled === false ?
                                (
                                    <Link to={item.to} key={index}>
                                        <div className="side-nav-link">
                                            {item.icon}<span>{item.page}</span>
                                        </div>
                                    </Link>
                                ) :
                                (
                                    <Link aria-disabled to="" key={index}>
                                        <div className="disabled">
                                            {item.icon}<span>{item.page}</span>
                                        </div>
                                    </Link>
                                )}
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar
