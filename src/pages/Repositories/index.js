import React from 'react'
import './repositories.css'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment'
import ReactLoading from 'react-loading'
import { MdCreateNewFolder } from 'react-icons/md'
import { BiGitPullRequest } from 'react-icons/bi'
import { SiJavascript, SiPowershell } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { FaJava, FaHtml5 } from 'react-icons/fa'

const Repositories = () => {
    const REPOS = gql`
    query REPOS {
        viewer {
          repositories(first: 10, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC }) {
            totalCount
            nodes {
              name
              owner {
                login
                avatarUrl
              }
              url
              isPrivate
              createdAt
              updatedAt
              pushedAt
              openGraphImageUrl
              usesCustomOpenGraphImage
              shortDescriptionHTML
              languages(first:3) {
                  nodes {
                      name
                  }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
    `
    const { loading, error, data } = useQuery(REPOS);
    if (loading) {
        return (
            <div className="loading"><ReactLoading type={'spin'} color={'black'} height={'100px'} width={'100px'} /></div>
        )
    }

    if (error) {
        return (
            <p>Erro {error.message}</p>
        )
    }
    if (data) {
        const repos = data.viewer.repositories.nodes;
        return (
            <>
                <div className="repositories">
                    {repos.reverse().map((repo, index) => {
                        return (
                            <div className="card" key={index}>
                                <div style={{ height: '200px' }}><img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={repo.openGraphImageUrl} alt={`Preview ${repo.name}`} /></div>
                                <div className="name">{repo.name}</div>
                                <div className="information">
                                    <div className="owner">
                                        <img src={repo.owner.avatarUrl} alt={repo.owner.login} /> {repo.owner.login}
                                    </div>
                                    <div className="createdAt"><MdCreateNewFolder /> <span>{moment(repo.createdAt).format('DD/MM/YYYY')}</span></div>
                                    <div className="last-push"><BiGitPullRequest /> <span>{moment(repo.pushedAt).format('DD/MM/YYYY')}</span></div>
                                </div>
                                <div className="description">
                                    {repo.shortDescriptionHTML ? repo.shortDescriptionHTML : 'Nenhuma descrição disponivel.'}
                                </div>
                                <div className="language">
                                    {repo.languages.nodes.map(languages => {
                                        return (
                                            languages.name === 'JavaScript' ? <SiJavascript /> :
                                                languages.name === 'CSS' ? <DiCss3 /> :
                                                    languages.name === 'Java' ? <FaJava /> :
                                                        languages.name === 'HTML' ? <FaHtml5 /> :
                                                            languages.name === 'Shell' ? <SiPowershell /> :
                                                                languages.name

                                        )
                                    })}

                                </div>
                                <div className="link">
                                    <a href={repo.url}>Abrir no Github {'>'}{'>'}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Repositories

// eslint-disable-next-line no-lone-blocks
/* {loading ? < : data.map(repo => (



           ))} */