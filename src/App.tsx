import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {LoginPage} from './components/LoginPage/LoginPage';
import {Paths} from './routes/paths';
import {RegistrationPage} from "./components/RegistrationPage/RegistrationPage";

function App() {

    const {loginPage, registrationPage} = Paths;

    return (
        <div>
            <h2>Start</h2>
            <Routes>
                <Route path={loginPage} element={<LoginPage />}/>
                <Route path={registrationPage} element={<RegistrationPage />}/>
            </Routes>
        </div>
    );
}

export default App;
