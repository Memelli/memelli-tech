import React from 'react'
import './cardHome.css'

const CardHome = () => {
    return (
        <div className="card-home">
            <img src="https://picsum.photos/100/100?grayscale" alt="aa" />
            <div className="informations">
                <div className="name">
                    <span>Titulo</span>
                    <small>26/10/10 - 4 dias</small>
                    <span>Dev Full Stack</span>
                </div>
                <div className="frameworks">
                    <span className="js">JS</span>    
                    <span className="react">React</span>    
                    <span className="react">React</span>    
                </div>
            </div>
        </div>
    )
}

export default CardHome
