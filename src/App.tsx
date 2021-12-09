import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import {LoginPage} from './components/LoginPage/LoginPage';
import {Paths} from './routes/paths';

function App() {
    const {loginPage} = Paths;
    return (
        <div>
            Start
            <Routes>
                <Route path={loginPage} element={<LoginPage/>}/>
            </Routes>
            <Link to={loginPage}>About</Link>
        </div>

    );
}

export default App;
