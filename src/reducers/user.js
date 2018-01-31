import { LOGIN_SUCCESS, UPLOAD_DATA } from '../constants/actionType'

const initState = {
    redirectTo: './login',
    msg: '',
    // 默认数据
    shortName: '',
    fullName: '',
    displayName: '',
    emial: '',
    employeeID: '',
    department: '',
    company: '',
    telephoneNumber: '',
    title: '',
    groups: '',
    // 用户填写
    avatar: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
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
            startTime: '',
            endTime: '',
            duty: '',
        },
    ],
}

export default function user(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload, redirectTo: './detail' }
        case UPLOAD_DATA:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
