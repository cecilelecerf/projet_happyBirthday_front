import '../css/Left.css';
import React from 'react';
import Birthday from '../birthdayComposant/Birthday';

function Left(birthdayApi) {

    return( 
        <div className="Left">
            <div id="circle--container">
                <div>
                    <h1>JOYEUX ANNIVERSAIRE</h1>
                    
                </div>
            </div>

                
            <Birthday
            lastname={birthdayApi.birthdayApi.lastname}
            firstname={birthdayApi.birthdayApi.firstname}
            />

        </div>
    )


        
    
}


export default Left;