import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './repositories.css'
import moment from 'moment'
import ReactLoading from 'react-loading'
import { MdCreateNewFolder } from 'react-icons/md'
import { BiGitPullRequest } from 'react-icons/bi'
import { SiJavascript } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { FaJava } from 'react-icons/fa'

const Repositories = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://api.github.com/users/Memelli/repos'
            const result = await axios.get(url)
                .then((response) => {
                    setData(response.data)
                    setLoading(false)
                })
                .catch(error => console.log(error))
            return result
        }
        fetchData()
    }, [])

    return (
        <div className="repositories">
            {loading ? <div className="loading"><ReactLoading type={'spin'} color={'white'} height={'100px'} width={'100px'} /></div> : data.map(repo => (
                <div className="card">
                    <div className="name">{repo.name}</div>
                    <div className="information">
                        <div className="owner">
                            <img src={repo.owner.avatar_url} alt={repo.owner.login} /> {repo.owner.login}
                        </div>
                        <div className="createdAt"><MdCreateNewFolder /> <span>{moment(repo.created_at).format('DD/MM/YYYY')}</span></div>
                        <div className="last-push"><BiGitPullRequest /> <span>{moment(repo.pushed_at).format('DD/MM/YYYY')}</span></div>
                    </div>
                    <div className="description">
                        {repo.description ? repo.description : 'Nenhuma descrição disponivel.'}
                    </div>
                    <div className="language">
                        {repo.language === 'JavaScript' ? <SiJavascript /> :
                            repo.language === 'CSS' ? <DiCss3 /> :
                                repo.language === 'Java' ? <FaJava /> :
                                    repo.language
                        }
                    </div>
                    <div className="link">
                        <a href={repo.svn_url}>Abrir no Github {'>'}{'>'}</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Repositories
