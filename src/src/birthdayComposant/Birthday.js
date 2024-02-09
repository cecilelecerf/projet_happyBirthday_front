import './Birthday.css';

function Birthday(birthdayApi) {
    return(
        <div className="Birthday">
                <p>{birthdayApi.lastname} {birthdayApi.firstname}</p>
        </div>
    );
    
};
export default Birthday;