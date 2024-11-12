import React, {useState} from 'react'
import "./App.css";
import UserList from './components/UserList'

const App = () => {

    const [isUsersVisible, setIsUsersVisible] = useState(true)

    return (
        <>
            <button onClick={() => setIsUsersVisible((prev) => !prev)}>
                toggle users show
            </button>
            {isUsersVisible && <UserList />}
        </>
    );
};

export default App;
