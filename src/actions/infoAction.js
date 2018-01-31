import axios from 'axios'
import { SEARCH_SUCCESS, GET_SUCCESS } from '../constants/actionType'

function searchSuccess(data) {
    return {
        type: SEARCH_SUCCESS,
        payload: data,
    }
}

function getSuccess(data) {
    return {
        type: GET_SUCCESS,
        payload: data,
    }
}

export function search(keyword) {
    // TODO err
    return ((dispacth) => {
        axios.post('/info/search', { query: keyword })
            .then((res) => {
                dispacth(searchSuccess(res.data))
            })
    })
}

export function getUserInfo(ShortName) {
    // TODO err
    return ((dispacth) => {
        axios.post('/info/person', { ShortName })
            .then((res) => {
                dispacth(getSuccess(res.data))
            })
    })
}
