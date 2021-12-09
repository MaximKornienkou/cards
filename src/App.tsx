import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {LoginPage} from './components/LoginPage/LoginPage';
import {Paths} from './routes/paths';

function App() {
    const {loginPage} = Paths;
    return (
        <div className="App">
            <Routes>
                <Route path={loginPage} element={<LoginPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
