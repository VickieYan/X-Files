import axios from 'axios'
import { ERROR_MSG, LOGIN_SUCCESS } from '../constants/actionType'

function errorMsg(msg) {
    return {
        msg,
        type: ERROR_MSG,
    }
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
    }
}

// actionCreator
export function login({ shortName, password }) {
    if (!shortName || !password) {
        return errorMsg('用户名和密码必须输入')
    }
    return ((dispatch) => {
        axios.post('/user/signin', { shortName, password })
        .then((res) => {
            console.log(res)
        })
    })
}
