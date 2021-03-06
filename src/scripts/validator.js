export default {
    shortName: {
        pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i,
        errorMsg: '请检查英文短名',
    },
    password: {
        // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        pattern: /^[A-Za-z\d。~!@#$%\^\+\*&\\\/\?\|:\.<>{}() ';=",]{5,}$/,
        errorMsg: ['密码至少五位', '密码错误, 请重新输入'],
    },
    checkPw: {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        errorMsg: '两次输入不一致',
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
