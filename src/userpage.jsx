import { useState, useEffect } from 'react';
import './App.css';
import facade from './util/apiFacade';

function App() {
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

        <div class="userFlex">
            <div class="userHashMap">

            </div>
            <div class="diaryInfo">
                <div>
                    <h3>Diary</h3>
                    <h3>Info</h3>
                    <h3>Mood</h3>
                </div>
                <div>
                    <p> write diary underneth  </p>
                </div>
            </div>
        </div>

    );

}