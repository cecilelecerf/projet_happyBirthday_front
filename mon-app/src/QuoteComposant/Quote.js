
import '../css/Quote.css';

function Quote (props) {
    return(     
        <div className="Quote" style={{boxShadow: "-6px 6px "+props.currentColors+", -8px 8px #000"}}>
            <p>{props.quote}</p>
            <p>- {props.name}</p>
        </div>            
    );
}

export default Quote;