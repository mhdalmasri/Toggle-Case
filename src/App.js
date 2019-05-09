import React, { Component } from 'react';
import Input from "./Input"
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state=(
      {
       uppercase:false
      }
             )
    this.myRef= React.createRef();
  }

  toggle = () => {
    let text = this.myRef.current.value;
    console.log(text);
    text = this.state.uppercase ? text.toLowerCase() :text.toUpperCase();
    this.setState({
                uppercase: !this.state.uppercase
                  })
           }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Input myRef={this.myRef} toggle={this.toggle}/>
         <br></br>
         Satus UpperCase : {this.state.uppercase.toString()}
        </header>
      </div>
    );
  }
}

export default App;
