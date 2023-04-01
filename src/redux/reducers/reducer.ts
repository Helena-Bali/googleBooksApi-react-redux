import axios from 'axios'
import {Dispatch} from "@reduxjs/toolkit";
import {Data} from '../../types'

const SET_B00KS = 'SET_BOOKS'
const SORT_CATEGORY = 'SORT_CATEGORY'

const initialState = {
    books: []
}

const reducer = (state = initialState, action: { type: string, payload?: string, query?: string , books: []}) => {
    switch (action.type) {
        case SET_B00KS:
            return {
                ...state,
                books: action.payload
            }
        case SORT_CATEGORY: {
            const books = action.books
            const copiedBooks = books.slice()
            const filteredBooks = copiedBooks.filter((it: Data) => {
                    return action.payload !== "All"? it.volumeInfo.categories &&
                        it.volumeInfo.categories[0] === action.payload
                        : action.books
                }
            )
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

export function sortByCategory(books: any, value?: string) {
    return ({
        type: SORT_CATEGORY,
        payload: value,
        books: books
    })
}



export const getBooks = (query: string, number: number, sort: string) => {
    return (dispatch: Dispatch) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyChmj7WVf-0XyWKFmlHy8Ki7gFuT-IYL7Y&orderBy=${sort}&startIndex=${number}&maxResults=30`
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

export const getFilteredBooks = (query: string, number: number, sort: string, value?: string) => {
   console.log('getFilteredBooks invoked with', query,number, sort, value)
    return (dispatch: Dispatch) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyChmj7WVf-0XyWKFmlHy8Ki7gFuT-IYL7Y&orderBy=${sort}&startIndex=${number}&maxResults=30`
        axios(url)
            .then(res => {
                if (res.status === 400) {
                    throw new Error('Bad response')
                }
                return res
            })
            .then(res => {
                dispatch(sortByCategory(res.data.items, value))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default reducer
