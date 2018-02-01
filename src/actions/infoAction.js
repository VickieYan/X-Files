import axios from 'axios'
import {
    SEARCH_SUCCESS,
    GET_SUCCESS,
    SORT_SUCCESS,
    INIT_SUCCESS,
} from '../constants/actionType'

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

function sortSuccess(data) {
    return {
        type: SORT_SUCCESS,
        payload: data,
    }
}

function initSuccess(data) {
    return {
        type: INIT_SUCCESS,
        payload: data,
    }
}

export function search(keyword) {
    // TODO err
    return ((dispacth) => {
        axios.post('/info/search', { query: keyword })
            .then((res) => {
                dispacth(searchSuccess(res.data.data))
            })
        })
    }

export function sort(department) {
    return ((dispacth) => {
        axios.post('/info/department', { query: department })
        .then((res) => {
            if (res.data.code === 200) {
                console.log(res.data.data)
                dispacth(sortSuccess(res.data.data))
            }
        })
    })
}

export function initInfo(page) {
    return ((dispacth) => {
        axios.post('/info/indexShow', { query: page })
            .then((res) => {
                dispacth(initSuccess(res.data.data))
            })
    })
}

export function getUserInfo(ShortName) {
    // TODO err
    return ((dispacth) => {
        axios.post('/user/info', { query: ShortName })
            .then((res) => {
                dispacth(getSuccess(res.data.data))
            })
    })
}
