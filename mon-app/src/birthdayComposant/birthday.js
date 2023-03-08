// import '../css/Quote.css';

function Quote(birthdayApi) {
    return(
        <div className="birthday">
            
            <div>
                <p>{birthdayApi.quote}</p>
                <p>- {birthdayApi.name}</p>
            </div>
        </div>
    );
    
};


export default Quote;