import React from 'react';
import './ImgViewer.scss';

function ImgViewer(props) {
    return (
        <div className="img-viewer">
            {props.imgs.map((img) => (
                <img src={img} alt="C Imagen"/>
            ))}
        </div>
    )
}

export { ImgViewer };