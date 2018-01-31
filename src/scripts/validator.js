export default {
    shortName: {
        pattern: /^[a-zA-Z0-9_-]{4,16}$/,
        errorMsg: '请输入4-16位的英文短名，支持下划线',
    },
    password: {
        pattern: /^[a-zA-Z0-9_\-.@]{4,}$/,
        errorMsg: '密码至少四位数字',
    },
    tel: {
        pattern: /^1[3|4|5|7|8][0-9]\d{4,8}$/,
        errorMsg: '您输入的手机号码有误',
    },
    email: {
        pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
        errorMsg: '您输入的邮箱有误',
    },
}
