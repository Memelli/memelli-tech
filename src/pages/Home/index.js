import React from 'react'
import CardHome from '../../components/utils/Cards/Home'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <div className="photo">
                    <img src="https://picsum.photos/500/500?grayscale" alt="aa" />
                </div>
                <div className="about">
                    Meu nome é Julio Memeli, tenho 24 anos e estudo engenharia da computaçao na UFES.
                    Comecei a programar muito cedo, com 11 anos, quando eu frequentava um fórum chamado RageZone.
                    Lá tive o meu primeiro contato com um projeto open source, em JAVA. O projeto era um servidor de um jogo MMORPG.
                    Depois de um tempo migrei para o desenvolvimento web, e comecei a aprender PHP, desisti, e fui para o JavaScript. Atualmente trabalho com a MERN stack (Mongo, Express, React e Node).
                    <div className="experiences">
                        <span data-tooltip="4 anos exp." data-tooltip-position="top">JavaScript</span>
                        <span data-tooltip="2 anos exp." data-tooltip-position="top">Node</span>
                        <span data-tooltip="2 anos exp." data-tooltip-position="top">React</span>
                        <span data-tooltip="1 ano e meio exp." data-tooltip-position="top">MongoDB</span>
                        <span data-tooltip="4 anos exp." data-tooltip-position="top">MySQL</span>
                        <span data-tooltip="1 ano exp." data-tooltip-position="top">UI/UX</span>
                    </div>
                </div>
                
            </div>
            <div className="jobs">
                <CardHome />
                <CardHome />
                <CardHome />
                <CardHome />
            </div>

            
        </div>
    )
}

export default Home
