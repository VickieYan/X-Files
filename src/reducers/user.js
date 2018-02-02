import { LOGIN_SUCCESS, UPLOAD_DATA, LOGOUT_SUCCESS, GET_SELF_SUCCESS, REDIRECT_SUCCESS } from '../constants/actionType'

const initState = {
    redirectTo: './login',
    msg: '',
    // 默认数据
    shortName: '',
    fullName: '',
    displayName: '',
    email: '',
    employeeID: '',
    domain: 'WWW Dev',
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
    sex: '男',
    isSingle: '是',
    phoneNumber: '',
    hometown: '',
    signature: '',
    github: '',
    linkedin: '',
    twitter: '',
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
        default:
            return state
    }
}
