import axios from 'axios'
import {Dispatch} from "@reduxjs/toolkit";
import {Data} from '../../types'

const SET_B00KS = 'SET_BOOKS'
const SORT_CATEGORY = 'SORT_CATEGORY'

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
        case SORT_CATEGORY: {
            const books = state.books
            const filteredBooks = books.filter((it: Data) =>
                it.volumeInfo.categories? it.volumeInfo.categories[0] === action.payload: [])
            return {
             ...state,
                books: filteredBooks
            }
        }
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

export function sortByCategory(value: string) {
    return ({
        type: SORT_CATEGORY,
        payload: value
    })
}

export const getBooks = (query: string, number: number, sort: string) => {
    return (dispatch: Dispatch) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyChmj7WVf-0XyWKFmlHy8Ki7gFuT-IYL7Y&orderBy=${sort}&startIndex=${number}&maxResults=30`
        console.log(url)
        axios(url)
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
