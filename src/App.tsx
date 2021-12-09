import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {LoginPage} from './components/LoginPage/LoginPage';
import {Paths} from './routes/paths';

function App() {
    const {loginPage} = Paths;
    return (
        <div>
            <h2>Start</h2>
            <Routes>
                <Route path={loginPage} element={<LoginPage/>}/>
            </Routes>

        </div>

    );
}

export default App;
