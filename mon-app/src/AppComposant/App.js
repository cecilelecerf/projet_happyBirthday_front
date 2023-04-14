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
      i:0,
      colors: ['#df80ac', '#579FF4', '#FCB325','#098E27'],
      currentColors: "#df80ac",
      pourcentage: "20%",
      images : ['hearth.png', 'flower.png', 'friedEgg.png', 'pen.png'],
      currentImage: 'hearth.png',

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
        console.log(result);
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
    let currentImage = {};
    let i = 0;
    let pourcentage = "";

     // boucle d'interval interval de 5000ms
     this.timerId = setInterval(()=>{
      // pour faire une boucle du nombre de birthday
      this.state.i == this.state.birthday.count_total-1 ? i=0 : i++;
      currentBirthday = this.state.birthday.list[i];
      currentColors = this.state.colors[i];
      currentImage = this.state.images[i];
      pourcentage = (i+1)*100 / this.state.birthday.count_total +"%";

      // transmis d'info pour sortie de boucle
      this.setState({
        currentBirthday: currentBirthday,
        i: i,
        currentColors: currentColors,
        pourcentage : pourcentage,
        currentImage : currentImage,
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
              <Left birthdayApi={this.state.currentBirthday} colors={this.state.currentColors}/>
              <Right 
                currentColors={this.state.currentColors} 
                TodayQUOTE={this.state.TodayQUOTE} 
                count_total={this.state.birthday.count_total}
                i={this.state.i}
                pourcentage={this.state.pourcentage}
                currentImage={this.state.currentImage}
              />
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