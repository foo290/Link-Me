import React, { Component } from "react";
// import ProfileCard from "./components/profile_card";
import "./css/rootApp.css";
import Holder from "./components/holder";
import bg from './media/components/ww.jpg'
import Hero from "./components/hero";
import logo from './media/components/google.png'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      profiles: []
    }
  }
  componentDidMount(){
    axios.get('/tree').then( response =>{
      console.log("sending req")
      console.log(response.data)
      this.setState({profiles: response.data})
    })
  }

  render() {
    return(
      <div className="Root-app">
      <Hero/>
      <Holder profileCards={this.state.profiles} />
      </div>
    )
  }
}

export default App;
