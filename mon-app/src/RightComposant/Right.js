import '../css/Right.css';
import Quote from '../QuoteComposant/Quote';
import React from 'react';

function Right (props) {
  let i = props.i +1;
  return(
    <div className="Right">
      <Quote 
        quote={props.TodayQUOTE.quote}
        name={props.TodayQUOTE.author}
        currentColors={props.currentColors}
      />
      <div>
        <p>0{i}</p>
        <div className="bar">
          <div>
          </div>
        </div>
        <p>0{props.count_total}</p>
      </div>
    </div>
  );
  
}
    


export default Right;