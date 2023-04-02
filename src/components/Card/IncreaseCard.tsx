import './Card.css'
import React, {useEffect, useState} from "react";
import {Props} from "../../types"
import noImage from "./book.jpg";

const Increase: React.FC<Props> = ({show, data, onClose}) => {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (clicked)
            onClose()
    }, [clicked])

    const image = () => {
        const img = data.volumeInfo.imageLinks
        return img ? img.thumbnail : noImage
    }

    if (!show || clicked) {
        return null;
    }
    return (
        <div className="Overlay">
            <div className="Overlay-inner">
                <button className="Close"
                        onClick={() => {
                            setClicked(true);
                        }}>✖
                </button>
                <div className="Inner-box">
                    <img src={image()} alt=""/>
                    <div className="Info">
                        <h2>{data.volumeInfo.title}</h2>
                        <h3>{data.volumeInfo.authors.map(it => `${it}, ` )}</h3>
                        <h4>{data.volumeInfo.publisher} <span>{data.volumeInfo.publishedDate}</span></h4><br/>
                    </div>
                </div>
                <h4 className="Description">{data.volumeInfo.description}</h4>
            </div>
        </div>
    )
}
export default Increase;
