import React, {useState} from 'react'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import type {RootState} from '../../redux/reducers/store'
import Card from "../Card/Card";
import '../Card/Card.css'
import IncreaseCard from "../Card/IncreaseCard";
import {Data} from "../../types"
import './Main.css';


const ListOfBooks: React.FC = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const [show, setShow] = useState<boolean>(false)
    const [bookItem, setItem] = useState<any>()

    const searchedListOfBooks = useAppSelector(store => store.reducer)
    const booksList = () => searchedListOfBooks.books ? searchedListOfBooks.books.map((it: Data, index: number) =>
            <div onClick={() => {
                setShow(true)
                setItem(it)
            }}><Card data={it} key={index}/>
                <div className="Upper">
                    <IncreaseCard
                        key={index}
                        show={show} data={bookItem}
                        onClose={() => {
                            setShow(false)
                        }}/></div>
            </div>
        )
        : "No book with this title found. Please try another name."

    return (
        <div>
            <div className="Results">
                {searchedListOfBooks.books && searchedListOfBooks.books.length > 0 ?
                    `Found ${searchedListOfBooks.totalItems} results` : null}
            </div>
            <div className="Card-container">{booksList()}</div>
        </div>
    )
}

export default ListOfBooks
