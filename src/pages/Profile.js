import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/githubContext";
import {Link, useParams} from "react-router-dom";
import {GithubState} from "../context/github/githubState";

export const Profile = () => {
    const params = useParams()
    const {getUser, getRepos, loading, user, repos, users} = useContext(GithubContext)
    // const name = match.params.name
    console.log(params, users)
    const userInfo = users.find((el) => el.id == params.name)
    console.log(userInfo)
    useEffect(() => {
        getRepos(userInfo.login)
        getUser(userInfo.login)
        // eslint-disable-next-line
    }, [])


    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following,
        public_repos, public_gists
    } = user

    return (
       <>
           <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a href={html_url}
                            target="_blank"
                            className="btn btn-dark">Открыть профиль</a>
                            <ul>
                                {login && <li><strong>Username: </strong> {login}</li>}
                                {company && <li><strong>Company: </strong> {company}</li>}
                                {blog && <li><strong>Website: </strong> {blog}</li>}
                            </ul>

                            <span className="badge bg-primary">Подписчики: {followers}</span>
                            <span className="badge bg-success">Подписан: {following}</span>
                            <span className="badge bg-info">Репозитории: {public_repos}</span>
                            <span className="badge bg-dark">Gists: {public_gists}</span>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}
