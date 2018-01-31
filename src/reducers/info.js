import { SEARCH_SUCCESS } from '../constants/actionType'

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
    current: {},
}
export default function info(state = initState, action) {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
