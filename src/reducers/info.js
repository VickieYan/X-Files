import {
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    SORT_SUCCESS,
    SORT_FAILURE,
    INIT_SUCCESS,
    GET_SUCCESS,
    LOAD_MORE_SUCCESS,
    UPDATE_LIKE,
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
        case SEARCH_FAILURE:
            return { ...state, members: [] }
        case SORT_SUCCESS:
            return { ...state, members: action.payload }
        case SORT_FAILURE:
            return { ...state, members: [] }
        case INIT_SUCCESS:
            return { ...state, members: action.payload }
        case GET_SUCCESS:
            return { ...state, current: action.payload }
        case LOAD_MORE_SUCCESS:
            return { ...state, members: state.members.concat(action.payload.data), nowPage: action.payload.nowPage }
        case UPDATE_LIKE:
            return { ...state, members: action.payload.newArr }
        default:
            return state
    }
}
