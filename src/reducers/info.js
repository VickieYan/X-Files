import {
    SEARCH_SUCCESS,
    SORT_SUCCESS,
    INIT_SUCCESS,
    GET_SUCCESS,
} from '../constants/actionType'

const initState = {
    members: [
        {
            ShortName: '',
            EName: '',
            Signature: '',
            Deparent: '',
            Job: '',
            PhoneNumber: '',
            Photograph: '',
            Visit: '',
        },
    ],
    current: [],
}
export default function info(state = initState, action) {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return { ...state, ...action.payload }
        case SORT_SUCCESS:
            return { ...state, current: action.payload }
        case INIT_SUCCESS:
            return { ...state, members: action.payload }
        case GET_SUCCESS:
            return { ...state, current: action.payload }
        default:
            return state
    }
}
