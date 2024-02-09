import React from 'react';

class ApiService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          TodayQUOTE: []
        };
      }
      componentDidMount() {
        fetch("http://localhost:3000/".$this.props.get)
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

}

export default ApiService;