import './App.css';
import React from 'react';
import NavBar from '../NavBarComposant/NavBar';
import Left from '../LeftComposant/Left';
import Right from '../RightComposant/Right';
import Quote from '../QuoteComposant/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      birthday: [],
      TodayQUOTE: []
    };
}
  componentDidMount() {
    fetch("http://localhost:3000/getBirthday")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          birthday: result
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
    );
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

  render() {
    const { error, isLoaded, birthday, TodayQUOTE } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else if(this.state.birthday.count_total > 0) {
      for(let i =0; i<this.state.birthday.count_total; i++){
        console.log(this.state.birthday.students_birthday.students[i].lastname);
        return (
          <div className="App">
          <NavBar/>
          <div class="flex">
            <Left birthdayApi={this.state.birthday.students_birthday.students[i]}/>
            <Right/>
          </div>
        </div>

      )}}
    else{
      return(
      <div className="App">
        <NavBar/>
        <Quote                    
          quote={this.state.TodayQUOTE.quote}
          name={this.state.TodayQUOTE.author}
        />
      </div>
    )}
  


  }

}



export default App;
