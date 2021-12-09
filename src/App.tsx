import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {LoginPage} from './components/LoginPage/LoginPage';
import {Paths} from './routes/paths';

function App() {
    const {loginPage} = Paths;
    return (
        
            <Routes>
                <Route path={loginPage} element={<LoginPage/>}/>
            </Routes>

    );
}

export default App;
