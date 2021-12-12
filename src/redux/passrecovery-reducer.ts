import {Dispatch} from 'redux';
import axios from "axios";

type InitialStateType = {
    email: string,
    from: string,
    message: string,
}
type PassRecoveryActionTypes =
    | ReturnType<typeof enterEmailAC>
    | ReturnType<typeof passRecoveryAC>


const initialState: InitialStateType = {
    email: "",
    from: "maxim.kornienkou@gmail.com",
    message: `<div style="background-color: lime; padding: 15px">password recovery link: <a href='http://localhost:3000/#/login'>link</a></div>`,
}

export const passRecoveryReducer = (state = initialState, action: PassRecoveryActionTypes): InitialStateType => {
    switch (action.type) {
        case "ENTER-EMAIL":
            return {...state, email: action.mail}
        default:
            return state;
    }
}

export const enterEmailAC = (mail: string) => ({type: "ENTER-EMAIL", mail} as const);
export const passRecoveryAC = () => ({type: "PASS-RECOVERY"} as const);


export const passRecoveryTC = (mail: string) => {
    return (dispatch: Dispatch<PassRecoveryActionTypes>) => {
        axios.post(`http://localhost:7542/2.0/auth/forgot`)
            .then((response) => {
                dispatch(passRecoveryAC());
            })
            .catch(() => {
                console.log("hello, you are stupid");
            })
    }
}