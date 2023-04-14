import '../css/Right.css';
import Quote from '../QuoteComposant/Quote';
import React from 'react';
import Gif from '../GifComposant/Gif';

function Right (props) {
  let i = props.i +1;

  return(
    <div className="Right">
      <Quote 
        quote={props.TodayQUOTE.quote}
        name={props.TodayQUOTE.author}
        currentColors={props.currentColors}
      />
      <Gif/>
      <div id='progress'>
        <p>0{i}</p>
        <div className="bar">
          <div style={{width:props.pourcentage, backgroundColor: props.currentColors}}>
          </div>
        </div>
        <p>0{props.count_total}</p>
      </div>
    </div>
  );
  
}
    


export default Right;