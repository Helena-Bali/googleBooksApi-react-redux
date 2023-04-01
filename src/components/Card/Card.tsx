import React from 'react';
import './Card.css'
import noImage from './book.jpg'
import {CardItems} from "../../types";


const Card: React.FC<CardItems> = ({data}) => {
    const categories = () => {
        const category = data.volumeInfo.categories
        return category ? category[0] : ""
    }

    const image = () => {
        const img = data.volumeInfo.imageLinks
        return img ? img.thumbnail : noImage
    }

    return (
        <div className="Card">
            <img src={image()} alt="book"/>
            <div className="Bottom">
                <div className="Categories">{categories()}</div>
                <div><b>{data.volumeInfo.title}</b></div>
                <div>{data.volumeInfo.authors && data.volumeInfo.authors[0]}</div>
            </div>
        </div>
    )
}

export default Card;
