import '../css/NavBar.css';
import React from 'react';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleDateString('fr-FR', {weekday: 'long', day:'numeric', month:'long', year:'numeric'}),
        }
    }
    render(){
        return(
            <div className="NavBar">
                <p>Citation et anniversaires</p>
                <p>{this.state.date}</p>

            </div>
        );
    }
    
};


export default NavBar;