import React, {useState} from 'react'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import type {RootState} from '../../redux/reducers/store'
import Card from "../Card/Card";
import '../Card/Card.css'
import IncreaseCard from "../Card/IncreaseCard";
import {Data} from "../../types"


const ListOfBooks: React.FC = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const [show, setShow] = useState(false)
    const [bookItem, setItem] = useState<any>()

    const searchedListOfBooks = useAppSelector(store => store.reducer.books)
    const booksList = () => searchedListOfBooks ? searchedListOfBooks.map((it: Data) =>
            <div onClick={() => {
                setShow(true)
                setItem(it)
            }}><Card data={it}/>
                <div className="Upper">
                    <IncreaseCard
                        show={show} data={bookItem}
                        onClose={() => {
                            setShow(false)
                        }}/></div>
            </div>
        )
        : "No book with this title found. Please try another name."

    return (
        <div className="Card-container">{booksList()}</div>
    )
}

export default ListOfBooks
