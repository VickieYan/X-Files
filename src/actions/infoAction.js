import axios from 'axios'
import {
    SEARCH_SUCCESS,
    GET_SUCCESS,
    SORT_SUCCESS,
    INIT_SUCCESS,
    LOAD_MORE_SUCCESS,
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

function loadMoreSuccess(data, nowPage) {
    return {
        type: LOAD_MORE_SUCCESS,
        payload: {
            data,
            nowPage,
        },
    }
}

export function search(keyword) {
    // TODO err
    return ((dispatch) => {
        axios.post('/info/search', { query: keyword })
            .then((res) => {
                console.log(res)
                if (res.data.code !== 200) {
                    dispatch(searchSuccess(res.data.data))
                }
            })
        })
    }

export function sort(department) {
    return ((dispatch) => {
        axios.post('/info/department', { query: department })
        .then((res) => {
            if (res.data.code === 200) {
                dispatch(sortSuccess(res.data.data))
            }
        })
    })
}

export function initInfo(page) {
    return ((dispatch) => {
        axios.post('/info/indexShow', { page })
            .then((res) => {
                dispatch(initSuccess(res.data.info.data))
            })
    })
}

export function loadMore(page) {
    return ((dispatch) => {
        axios.post('/info/indexShow', { page })
            .then((res) => {
                if (page <= res.data.info.allPage) {
                    dispatch(loadMoreSuccess(res.data.info.data, page))
                }
            })
    })
}

export function getUserInfo(ShortName) {
    // TODO err
    return ((dispatch) => {
        axios.post('/user/info', { query: ShortName })
            .then((res) => {
                dispatch(getSuccess(res.data.data))
            })
    })
}
