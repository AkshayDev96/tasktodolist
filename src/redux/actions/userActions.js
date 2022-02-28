import {USER_LOGIN_SUCCESS,USER_LOGOUT } from "../constants/userConstant"

export const login = (email, password) => {
    return {
        type: USER_LOGIN_SUCCESS, payload: {
            email,password
        }
    }
}

export const logout = ()=>{
    return {type:USER_LOGOUT}
}