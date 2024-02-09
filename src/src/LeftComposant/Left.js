import '../css/Left.css';
import React from 'react';
import Birthday from '../birthdayComposant/Birthday';
import Circle from './Circle';
function Left(props) {
    return( 
        <div className="Left">
            <div id="circle--container">
                <div>
                    <Circle colors={props.colors}/> 
                </div>
            </div>
            <Birthday
            lastname={props.birthdayApi.lastname}
            firstname={props.birthdayApi.firstname}
            />
            <img src="./Star.svg" className='star1' alt='test'/>
            <img src="./Star.svg" className='star2' alt='test'/>
            <img src="./Star.svg" className='star3' alt='test'/>
        </div>
    )
}


export default Left;