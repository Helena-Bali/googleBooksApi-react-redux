import React, {useState, KeyboardEvent} from 'react';
import './Main.css';
import {getBooks} from '../../redux/reducers/reducer'
import {useDispatch} from 'react-redux'
import ListOfBooks from "./MainSelector";
import {AppDispatch} from "../../redux/reducers/store";
import Selects from "../Selects/Selects";

function Main() {
    const [search, setSearch] = useState("")
    const [count, setCount] = useState(30)
    type DispatchFunc = () => AppDispatch
    const useAppDispatch: DispatchFunc = useDispatch
    const dispatch = useAppDispatch()
    const sort = "relevance"

    const searchBook = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(getBooks(search, 0, sort))
        }
    }
    const loadMoreBooks = () => {
        setCount(count + 30)
    }

    return (
        <div className="App">
            <div>
            <div className="Input-container">
                <input
                    className="Input-style"
                    placeholder="Enter the book name"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    onKeyPress={searchBook}
                />
                <button
                    onClick={(e) => dispatch(getBooks(search, 0, sort))}
                    className="Button-Style">Search
                </button>
            </div>
            <Selects count={count} search={search}/>
            <ListOfBooks/>
            </div>


            <div className="ButtonContainer">
                <button className="BottomButton"
                        onClick={(e) => {
                            loadMoreBooks();
                            dispatch(getBooks(search, count, sort))
                        }}>Load More
                </button>
            </div>
        </div>
    );
}

export default Main;
