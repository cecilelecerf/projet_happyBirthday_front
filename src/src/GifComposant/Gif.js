import './Gif.css';
import React from 'react';
function Gif(props) {
    return( 
        <div className="Gif" style={{boxShadow: "-6px 6px "+props.currentColors+", -8px 8px #000"}}>
            <figure>
                <img src={'./images/'+props.currentImage} alt='test'/>
            </figure>
        </div>
    )
}
export default Gif;