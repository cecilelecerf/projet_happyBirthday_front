import '../css/Quote.css';

function Quote(props) {
    return(
        <div className="Quote"
        style={{backgroundColor: props.currentColors}}
        >
            
            <div>
                <p>{props.quote}</p>
                <p>- {props.name}</p>
            </div>
        </div>
    );
    
};


export default Quote;