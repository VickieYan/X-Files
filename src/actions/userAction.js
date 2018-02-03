import axios from 'axios'
import {
    ERROR_MSG,
    LOGIN_SUCCESS,
    UPLOAD_DATA,
    LOGOUT_SUCCESS,
    SUBMIT_SUCCESS,
    GET_SELF_SUCCESS,
    REDIRECT_SUCCESS,
} from '../constants/actionType'

function errorMsg(msg) {
    return {
        type: ERROR_MSG,
        msg,
    }
}

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
    }
}

// function submitSuccess(obj) {
//     return {
//         type: SUBMIT_SUCCESS,
//         payload: {

//         },
//     }
// }

function getSelfSuccess(obj) {
    return {
        type: GET_SELF_SUCCESS,
        payload: {
            shortName: obj.ShortName,
            fullName: obj.FullName,
            displayName: obj.DisplayName,
            email: obj.Email,
            employeeID: obj.EmployeeID,
            domain: obj.Domain,
            company: obj.Company,
            telephoneNumber: obj.TelephoneNumber,
            title: obj.Title,
            groups: obj.Groups,
            // 用户填写
            avatar: obj.Avatar,
            indexShowPhotograph: obj.IndexShowPhotograph,
            photograph1: obj.Photograph1,
            photograph2: obj.Photograph2,
            photograph3: obj.Photograph3,
            sex: obj.Sex,
            isSingle: obj.IsSingle,
            phoneNumber: obj.PhoneNumber,
            hometown: obj.Hometown,
            signature: obj.Signature,
            github: obj.GitHub,
            linkedin: obj.LinkedIn,
            twitter: obj.Twitter,
            hobbies: obj.Hobbies,
            skills: obj.Skills,
            contributes: obj.Contributes,
        },
    }
}

// export function redirectSuccess(redirectTo) {
//     return {
//         type: REDIRECT_SUCCESS,
//         payload: {
//             redirectTo,
//         },
//     }
// }

// actionCreator
export function check(fn) {
    return ((dispatch) => {
        axios.get('/user/check')
        .then((res) => {
            // 200 登录成功
            if (res.data.code === 200) {
                dispatch(loginSuccess({ shortName: res.data.info, redirectTo: './' }))
            }
            // 403 信息不完善
            if (res.data.code === 403) {
                dispatch(loginSuccess({ shortName: res.data.info, redirectTo: './detail' }))
            }
        }).then(fn)
    })
}

export function login({ ShortName, Password }, fn) {
    if (!ShortName || !Password) {
        return errorMsg('用户名和密码必须输入')
    }
    return ((dispatch) => {
        axios.post('/user/signin', { ShortName, Password })
        .then((res) => {
            // dispatch(loginSuccess(res.data))
            if (res.data.code === 200) {
                dispatch(loginSuccess({ shortName: res.data.info, redirectTo: './' }))
            }
            if (res.data.code === 403) {
                dispatch(loginSuccess({ shortName: res.data.info, redirectTo: './detail' }))
            }
        }).then(fn)
    })
}

export function logout(fn) {
    return ((dispatch) => {
        axios.get('/user/logout')
        .then(() => {
            dispatch(logoutSuccess())
        }).then(fn)
    })
}

export function uploadData(obj) {
    return {
        type: UPLOAD_DATA,
        payload: obj,
    }
}


export function getSelfInfo(fn) {
    return ((dispatch) => {
        axios.get('/user/person')
        .then((res) => {
            console.log(res.data.data)
            dispatch(getSelfSuccess(res.data.data))
        }).then(fn)
    })
}

export function submitData(data, fn) {
    console.log(data)
    axios.post('/user/updateUser', { ...data })
    .then((res) => {
        if (res.data.code === 200) {
            if (typeof fn === 'function') {
                fn()
            }
        }
    })
}

export function enhanceSubmit() {
    return ((dispatch, getState) => {
        submitData({
            Sex: getState().user.sex,
            IsSingle: getState().user.isSingle,
            Domain: getState().user.domain,
            PhoneNumber: getState().user.phoneNumber,
            Hometown: getState().user.hometown,
            Signature: getState().user.signature,
            GitHub: getState().user.github,
            LinkedIn: getState().user.linkedin,
            Twitter: getState().user.twitter,
            Hobbies: getState().user.hobbies,
            Skills: getState().user.skills,
            Contributes: getState().user.contributes,
        })
        // console.log(getState().user.skills)
    })
}
