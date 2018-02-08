import axios from 'axios'
import {
    SEARCH_SUCCESS,
    GET_SUCCESS,
    SORT_SUCCESS,
    SORT_FAILURE,
    INIT_SUCCESS,
    LOAD_MORE_SUCCESS,
    UPDATE_LIKE,
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
            } else {
                dispatch({
                    type: SORT_FAILURE,
                })
            }
        })
    })
}

export function initInfo(page, fn, fn2) {
    return ((dispatch) => {
        axios.post('/info/indexShow', { page })
            .then((res) => {
                dispatch(initSuccess(res.data.info.data))
            })
            .then(fn).then(fn2)
    })
}

export function updateLike(newArr) {
    return {
        type: UPDATE_LIKE,
        payload: {
            newArr,
        },
    }
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
