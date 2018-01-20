export default {
    username: {
        pattern: /^[a-zA-Z0-9_-]{4,16}$/,
        errorMsg: '请输入4-16位的英文短名，支持下划线',
    },
    password: {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        errorMsg: '密码至少八个字符，至少一个字母和一个数字',
    },
    checkPw: {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        errorMsg: '两次输入不一致',
    },
    phone: {
        pattern:  /^1[3|4|5|7|8][0-9]\d{4,8}$/,
        errorMsg: '您输入的手机号码有误',
    },
    email: {
        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        errorMsg: '您输入的手机号码有误',
    },
}
