import axios from "axios";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {enterEmailAC, passRecoveryAC, passRecoveryTC} from "../../redux/passrecovery-reducer";

type PassRecoveryPagePropsType = {}

export const PassRecoveryPage: React.FC<PassRecoveryPagePropsType> = () => {

    useEffect(() => {
        axios.get(`http://localhost:7542/2.0/ping`)
            .then((response) => {
                console.log(response);
            })
            .catch(() => {
                console.log("hello, you are stupid");
            })
    }, []);

    const dispatch = useDispatch();

    const [mail, setMail] = useState("");

    const onChangeEnterMail = (event: ChangeEvent<HTMLInputElement>) => {
        setMail(event.currentTarget.value);
        dispatch(enterEmailAC(mail));
        console.log(mail);
    }

    const onClickSendInstructions = () => {
        dispatch(passRecoveryTC(mail));
        console.log("test");
    }

    return (
        <form>
            <h3>!!!Some project name!!!</h3>
            <span>Forgot your password?</span>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" onChange={onChangeEnterMail} value={mail}/>
            </div>
            <p>Enter your mail and we will send you further instructions</p>
            <div>
                <button onClick={onClickSendInstructions}>Send instructions</button>
            </div>
        </form>
    )
}