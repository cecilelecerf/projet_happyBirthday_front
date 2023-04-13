
import '../css/Quote.css';

import React from 'react';

class Quote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hauteur:0,
            largeur:0,
          };

    }
    componentDidMount(){
        this.state.hauteur = document.getElementById('front').clientHeight;
        
        this.state.largeur = document.getElementById('front').clientWidth;

    }

    render(){
        return(
        
            <div className="Quote">
                <div id='front'>
    
                    <p>{this.props.quote}</p>
                    <p>- {this.props.name}</p>
                </div>
                <div style={{backgroundColor: this.props.currentColors, height:this.state.hauteur, width:this.state.largeur}} id='back'>
                </div>
            </div>            
    
        );

    }
}


export default Quote;