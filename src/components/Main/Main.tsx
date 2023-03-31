import React, {useState, KeyboardEvent} from 'react';
import './Main.css';
import {getBooks} from '../../redux/reducers/reducer'
import { useDispatch } from 'react-redux'
import ListOfBooks from "./MainSelector";
import {AppDispatch} from "../../redux/reducers/store";
import Selects from "../Selects/Selects";

function Main() {
    const [search, setSearch] = useState("")
    type DispatchFunc = () => AppDispatch
    const useAppDispatch: DispatchFunc = useDispatch
    const dispatch = useAppDispatch()

    const searchBook = (e: KeyboardEvent <HTMLInputElement>) => {
            if(e.key === "Enter") {
                dispatch(getBooks(search))
            }
        }

    return (
        <div className="App">
            <div className="Input-container">
            <input
                className="Input-style"
                placeholder="Enter the book name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
            />
            <button
                onClick={(e) => dispatch(getBooks(search))}
                className="Button-Style">Search</button>
            </div>
            <Selects/>
            {/*<form*/}
            {/*   // onSubmit={handleSubmit}*/}
            {/*>*/}
            {/*    <label>*/}
            {/*        Categories:*/}
            {/*        <select*/}
            {/*            // value={state.value} onChange={handleChange}*/}
            {/*        >*/}
            {/*            <option value="all">All</option>*/}
            {/*            <option value="art">Art</option>*/}
            {/*            <option value="biography">Biography</option>*/}
            {/*            <option value="computers">Computers</option>*/}
            {/*            <option value="history">History</option>*/}
            {/*            <option value="medical">Medical</option>*/}
            {/*            <option value="poetry">Poetry</option>*/}
            {/*        </select>*/}
            {/*    </label>*/}
            {/*    <input type="submit" value="Отправить" />*/}
            {/*</form>*/}
            <ListOfBooks/>
            <div className="ButtonContainer">
            <button className="BottomButton">Load More</button>
            </div>
        </div>
    );
}

export default Main;
