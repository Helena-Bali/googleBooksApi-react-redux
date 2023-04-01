import React, {useState} from "react";
import "./Select.css"
import {AppDispatch} from "../../redux/reducers/store";
import {useDispatch} from "react-redux";
import {getBooks, sortByCategory} from "../../redux/reducers/reducer";

const Selects: React.FC<any> = ({count, search}) => {
    const [value, setValue] = useState<any>()
    type DispatchFunc = () => AppDispatch
    const useAppDispatch: DispatchFunc = useDispatch
    const dispatch = useAppDispatch()

    return (
        <div className="Select-container">
            <label className="Label-category">
                <span> Categories: </span>
                <select className="Select"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            dispatch(sortByCategory(e.target.value))
                        }}>
                    <option value="All">All</option>
                    <option value="Art">Art</option>
                    <option value="Biography">Biography</option>
                    <option value="Computers">Computers</option>
                    <option value="History">History</option>
                    <option value="Medical">Medical</option>
                    <option value="Poetry">Poetry</option>
                </select>
            </label>
            <label className="Label-sort">
                <span>Sorting by: </span>
                <select
                    className="Select"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        dispatch(getBooks(search, count-30, (e.target.value)))
                    }}>
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </label>
        </div>
    )
}

export default Selects
