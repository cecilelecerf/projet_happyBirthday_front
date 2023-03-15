import '../css/Right.css';
import Quote from '../QuoteComposant/Quote';
import React from 'react';

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          TodayQUOTE: []
        };
      }
      componentDidMount() {
        fetch("http://localhost:3000/getQuote")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              TodayQUOTE: result.TodayQUOTE
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
    render(){
        const { error, isLoaded, TodayQUOTE } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
        return(
            <div className="Right">
                <Quote 
                    quote={this.state.TodayQUOTE.quote}
                    name={this.state.TodayQUOTE.author}
                />
            </div>
            );
        }
    }
    
};


export default Right;