import React, {useContext} from 'react';
import Search from "../components/search";
import Card from "../components/card";
import {GithubContext} from "../context/github/githubContext";

const Home = () => {
    const {loading, users} = useContext(GithubContext)
    return (
        <>
            <Search/>
            <hr className="text-decoration-line-through"/>
            <div className="row">
                {loading
                ? <p className="text-center">Загрузка...</p>
                    : users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Home;