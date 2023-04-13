import { useEffect } from 'react';
import '../css/Quote.css';

function Quote(props) {
    let element = document.getElementById('front');
    // console.log(element.style.height);
    // let hauteur = element.getBoundingClientRect()   ;
    useEffect(()=>{
        if(element.current){
            const height = element.clientHeight;
            console.log(height);
        }

    }, []);
    return(
        
        <div className="Quote">
            <div id='front'>

                <p>{props.quote}</p>
                <p>- {props.name}</p>
            </div>
            <div style={{backgroundColor: props.currentColors, }} id='back'>
            </div>
        </div>            

    );
    
};


export default Quote;