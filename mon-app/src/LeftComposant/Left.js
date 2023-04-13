import '../css/Left.css';
import React from 'react';
import Birthday from '../birthdayComposant/Birthday';

function Left(props) {
    return( 
        <div className="Left">
            <div id="circle--container">
                <div>
                    <img src='../../public/birthday_text.svg' colors={props.colors}/>  
                </div>
            </div>

                
            <Birthday
            lastname={props.birthdayApi.lastname}
            firstname={props.birthdayApi.firstname}
            />

        </div>
    )


        
    
}


export default Left;