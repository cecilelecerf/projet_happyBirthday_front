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
      currentBirthday:[],
      TodayQUOTE: [],
      color:'red',
      i:0,
      colors: ['#df80ac', '#579FF4', '#FCB325','#098E27'],
      currentColors: []

    };
}
  componentDidMount() {
    fetch("http://localhost:3000/getBirthday")
    .then(res => res.json())
    .then(
      (result) => {
        let birthday=[];
        birthday = {count_total : result.count_total, list : result.students_birthday.students.concat(result.teachers_birthday.teachers)};
        this.setState({
          isLoaded: true,
          birthday: birthday,
          currentBirthday: result.students_birthday.students[0]
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    fetch("http://localhost:3000/getQuote")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          TodayQUOTE: result.TodayQUOTE
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
    let currentBirthday = {};
    let currentColors = {};
    let i = 1;
    let color = 'color'+1;

    // boucle d'interval interval de 5000ms
    this.timerId = setInterval(()=>{
      // pour faire une boucle du nombre de birthday
      if (i < this.state.birthday.count_total){
        currentBirthday = this.state.birthday.list[i];
        currentColors = this.state.colors[i];
        color = 'color'+i;
        i++;
      }
      else {
        i = 0
      }
      
      // transmis d'info pour sortie de boucle
      this.setState({
        currentBirthday: currentBirthday,
        i: i,
        color: color,
        currentColors: currentColors
      })
    },5000)
  };
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  


  render() {
    const { error, isLoaded, birthday, TodayQUOTE } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else if(this.state.birthday.count_total > 0) {
        return (
          <div className="App">
            <NavBar/>
            <div className="flex" style={{backgroundColor: this.state.currentColors}}>
              <Left birthdayApi={this.state.currentBirthday} colors={this.state.colors}/>
              <Right colors={this.state.currentColors}/>
            </div>
          </div>
      )}

    else{
      return(
      <div className="App">
        <div className="solo">
        <NavBar/>
        <Quote                    
          quote={this.state.TodayQUOTE.quote}
          name={this.state.TodayQUOTE.author}
          />
          </div>
      </div>
    )}
  }
}
export default App;