import '../css/Quote.css';

function Quote(quoteApi) {
    return(
        <div className="Quote">
            
            <div>
                <p>{quoteApi.quote}</p>
                <p>- {quoteApi.name}</p>
            </div>
        </div>
    );
    
};


export default Quote;