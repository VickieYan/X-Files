import { LOGIN_SUCCES } from '../constants/actionType'

const initState = {
    redirectTo: '',
}

export default function user(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCES:
            return {}
        default:
            return state
    }
}
