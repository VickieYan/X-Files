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
    avatar: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
    indexShowPhotograph: 'http://img.hb.aicdn.com/462f07883ed8a00729b89e0e11da56264f5d6a391884cb-EKAEeC_fw658',
    photograph1: 'http://img.hb.aicdn.com/878bcfdf964345f2aba707a01bb87c84a5fac10c1f4f0-tzoR1H_fw658',
    photograph2: 'http://img.hb.aicdn.com/a117393c570026946b9184daa9715253eb46d1067c560-er7jVl_fw658',
    photograph3: 'http://img.hb.aicdn.com/a8d1d7cacb6175a19ba6df6cd87bec4f66ac4bb4a87b4-SztuMm_fw658',
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
