import React, { useState, useEffect } from 'react';
import './App.css';
import './userpage.css';
import facade from './util/apiFacade';

function UserPage() {
    const init = { username: '', password: '' };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dataFromServer, setDataFromServer] = useState('Loading...');

    useEffect(() => {
        facade.fetchData('hotels', 'GET').then((data) => setDataFromServer(data));
    }, [isLoggedIn]);

    const performLogin = (evt) => {
        evt.preventDefault();
        facade.login(
            loginCredentials.username,
            loginCredentials.password,
            setIsLoggedIn
        );
    };

    const onChange = (evt) => {
        setLoginCredentials({
            ...loginCredentials,
            [evt.target.id]: evt.target.value,
        });
    };

    return (
        <div className="userflex">
            {/* Your UI components and JSX here */}
        </div>
    );
}

export default UserPage;
