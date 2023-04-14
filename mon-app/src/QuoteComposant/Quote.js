
import '../css/Quote.css';

function Quote (props) {
    return(     
        <div className="Quote">
            <p>{props.quote}</p>
            <p>- {props.name}</p>
        </div>            
    );
}

export default Quote;