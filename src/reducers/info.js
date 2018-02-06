import {
    SEARCH_SUCCESS,
    SORT_SUCCESS,
    INIT_SUCCESS,
    GET_SUCCESS,
    LOAD_MORE_SUCCESS,
} from '../constants/actionType'

const initState = {
    nowPage: 1,
    members: [],
    current: [],
}
export default function info(state = initState, action) {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return { ...state, members: action.payload }
        case SORT_SUCCESS:
            return { ...state, members: action.payload }
        case INIT_SUCCESS:
            return { ...state, members: action.payload }
        case GET_SUCCESS:
            return { ...state, current: action.payload }
        case LOAD_MORE_SUCCESS:
            return { ...state, members: state.members.concat(action.payload.data), nowPage: action.payload.nowPage }
        default:
            return state
    }
}
