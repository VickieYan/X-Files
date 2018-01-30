import axios from 'axios'
import { ERROR_MSG, LOGIN_SUCCESS, UPLOAD_DATA } from '../constants/actionType'

function errorMsg(msg) {
    return {
        msg,
        type: ERROR_MSG,
    }
}

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

// actionCreator
export function login({ shortName, password }) {
    if (!shortName || !password) {
        return errorMsg('用户名和密码必须输入')
    }
    // return ((dispatch) => {
    //     axios.post('/user/signin', { shortName, password })
    //     .then((res) => {
    //         dispatch(loginSuccess(res.data))
    //     })
    // })

    // vk-simdata
    const res = {
        msg: '登录成功',
        code: 200,
        info: {
            shortName: 'vy67',
            fullName: 'Vickie.W.Yan',
            displayName: 'Vickie',
            emial: 'Vickie.W.Yan@newegg.com',
            employeeID: '418570912',
            department: 'MIS',
            company: 'Newegg',
            telephoneNumber: '17761237141',
            title: 'software',
            groups: 'WWW',
        },
    }
    if (res.code === 200) { // 登录成功
        return loginSuccess(res.info)
    }
}

export function uploadData(obj) {
    return {
        type: UPLOAD_DATA,
        payload: obj,
    }
}
