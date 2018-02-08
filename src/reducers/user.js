import {
    ERROR_MSG,
    LOGIN_SUCCESS,
    UPLOAD_DATA,
    LOGOUT_SUCCESS,
    GET_SELF_SUCCESS,
    REDIRECT_SUCCESS,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from '../constants/actionType'

const initState = {
    redirectTo: './login',
    msg: 0,
    fetchUser: -1,
    // 默认数据
    shortName: '',
    fullName: '',
    displayName: '',
    email: '',
    employeeID: '',
    domain: null,
    company: '',
    telephoneNumber: '',
    title: '',
    groups: '',
    // 用户填写
    avatar: '../static/images/default/avatar.jpg',
    indexShowPhotograph: '../static/images/default/pic1.jpg',
    photograph1: '../static/images/default/pic2.jpg',
    photograph2: '../static/images/default/pic3.jpg',
    photograph3: '../static/images/default/pic4.jpg',
    sex: null,
    isSingle: null,
    phoneNumber: '',
    hometown: '',
    signature: '',
    github: '',
    linkedin: '',
    twitter: '',
    wechat: '',
    school: '',
    hobbies: [],
    skills: [],
    contributes: [
        {
            startTime: new Date(),
            endTime: new Date(),
            duty: '',
        },
    ],
}

export default function user(state = initState, action) {
    switch (action.type) {
        case ERROR_MSG:
            return { ...state, ...action.payload }
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload }
        case LOGOUT_SUCCESS:
            return initState
        case UPLOAD_DATA:
            return { ...state, ...action.payload }
        case GET_SELF_SUCCESS:
            return { ...state, ...action.payload }
        case REDIRECT_SUCCESS:
            return { ...state, ...action.payload }
        case FETCH_USER_START:
            return { ...state, fetchUser: action.payload }
        case FETCH_USER_SUCCESS:
            return { ...state, fetchUser: action.payload }
        default:
            return state
    }
}
