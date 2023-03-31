import Select from 'react-select'
import React from "react";
import "./Select.css"


const options: any = [
    {value: 'all', label: 'All'},
    {value: 'art', label: 'Art'},
    {value: 'biography', label: 'Biography'},
    {value: 'computers', label: 'Computers'},
    {value: 'history', label: 'History'},
    {value: 'medical', label: 'Medical'},
    {value: 'poetry', label: 'Poetry'}
]

const sortOptions = [
    {value: 'relevance', label: 'relevance'},
    {value: 'newest', label: 'newest'}
]

const Selects = () => {
    return (
        <div className="Select-container">
            Categories: < Select className="Categories"  options={options} defaultValue={options[0]} />
            Sorting by: < Select className="Categories" options={sortOptions} defaultValue={sortOptions[0]}/>
        </div>
    )
}

export default Selects
