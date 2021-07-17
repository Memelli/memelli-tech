import React from 'react'
import CardHome from '../../components/utils/Cards/Home'
import CardAbout from '../../components/utils/Cards/About'
import './home.css'
import { jobsData, aboutData } from '../../components/utils/data/Data'

const Home = () => {

    return (
        <div className="home">
            <div className="content">
                {aboutData.map((item, index) => (
                    <CardAbout
                        key={index}
                        img={item.img}
                        description={item.description}
                        experiences={item.experiences}
                    />
                ))}
            </div>
            <div className="jobs">
                {jobsData.map((item, index) => (
                    <CardHome
                        key={index}
                        title={item.name}
                        startAt={item.startAt}
                        endAt={item.endAt}
                        role={item.role}
                        level={item.level}
                        languages={item.languages}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
