import axios from "axios";
import React, {ChangeEvent, useEffect, useState} from "react";

type PassRecoveryPagePropsType = {}

export const PassRecoveryPage: React.FC<PassRecoveryPagePropsType> = () => {

    useEffect(() => {
        axios.post(`http://localhost:7542/2.0/ping`)
            .then((response) => {
                console.log(1)
            })
            .catch(() => {
                console.log("hello, you are stupid")
            })
    }, [])

    const [mail, setMail] = useState("")

    const onChangeEnterMail = (event: ChangeEvent<HTMLInputElement>) => {
        setMail(event.currentTarget.value)
        console.log(mail)
    }

    return (
        <form>
            <h3>!!!Some project name!!!</h3>
            <span>Forgot your password?</span>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" onChange={onChangeEnterMail}/>
            </div>
            <span>Enter your mail and we will send you further instructions</span>
        </form>
    )
}