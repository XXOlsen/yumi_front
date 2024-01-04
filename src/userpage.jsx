import React, { useEffect } from 'react';
import './App.css';
import './css/userpage.css';
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
        
            <div class="userflex">
                <div class="flex-item1">
                    <h3>diary (hashmapp)</h3>
                </div>


                <div class="user-flex-item flex-item2">




                    <div class="diary">


                        <div class="diary-items diary-item1">
                            <form action="userpage.php" method="post">
                                <input type="text" name="date" placeholder="Date"/>
                            </form>
                        </div>


                        <div class="diary-items diary-item2">
                            <form action="userpage.php" method="post">
                                <input type="text" name="topic" placeholder="todays topic"/>
                            </form>
                        </div>


                        <div class="diary-items diary-item3">
                            <form action="userpage.php" method="post">
                                <input type="text" name="mood" placeholder="pick your mood"/>
                            </form>
                        </div>



                        <div class="diary-items diary-item4">
                            <form>
                                <label for="multilineInput">write your diary here</label>
                                <textarea class="diary-box" id="multilineInput" name="multilineInput" rows="8"
                                    cols="25"></textarea>
                                <input type="submit" value="save page in diary"/>
                            </form>
                        </div>





                    </div>



                </div>
            </div>

            );

}
export default userpage