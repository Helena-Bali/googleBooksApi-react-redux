import axios from 'axios'
import {Dispatch} from "@reduxjs/toolkit";

const SET_B00KS = 'SET_BOOKS'
//const SET_QUERY = 'GET_QUERY'

const initialState = {
    books: []
}


const reducer = (state = initialState, action: { type: string, payload?: any, query?: string }) => {
    switch (action.type) {
        case SET_B00KS:
            return {
                ...state,
                books: action.payload
            }
        // case SET_QUERY:
        //     return {
        //         ...state,
        //         payload: action.query
        //     }
        default:
            return state
    }
}

export function setBooks(books: any) {
    return ({
        type: SET_B00KS,
        payload: books
    })

}

// export function setQuery(query: string) {
//     return ({
//         type: SET_QUERY,
//         payload: query
//     })
// }

export const getBooks = (query: string) => {
    return (dispatch: Dispatch) => {
        axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyChmj7WVf-0XyWKFmlHy8Ki7gFuT-IYL7Y&startIndex=0&maxResults=30`)
            .then(res => {
                if (res.status === 400) {
                    throw new Error('Bad response')
                }
                return res
            })
            .then(res => {
                dispatch(setBooks(res.data.items))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default reducer
