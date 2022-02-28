import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstant"

export const userLoginReducers = (state = {}, action) => {
    let { type, payload } = action
    switch (type) {
        case USER_LOGIN_SUCCESS:
            const {email,password} = payload
            localStorage.setItem('userInfo', JSON.stringify({email, password}))
            return { userInfo: payload }
        case USER_LOGOUT:
            if(localStorage.getItem('userInfo')){
                localStorage.removeItem('userInfo')
            }
            return {}
        default:
            return state
    }
}