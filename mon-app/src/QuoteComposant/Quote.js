import '../css/Quote.css';

function Quote(props) {
    let element = document.getElementById('front');
    console.log(element.style.height);
    // let hauteur = element.getBoundingClientRect()   ;
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