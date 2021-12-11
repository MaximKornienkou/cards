import axios from "axios";
import React from "react";

type PassRecoveryPagePropsType = {}

export const PassRecoveryPage: React.FC<PassRecoveryPagePropsType> = () => {

    const getInfo = () => {
        axios.get<any>("http://localhost:7542/2.0/")
            .then((response) => {
                console.log(response)
            })
    }
    const response = 1

    return (
        <div>
            {response}
        </div>
    )
}