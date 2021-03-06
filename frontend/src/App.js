import React, { Component } from "react";
// import ProfileCard from "./components/profile_card";
import "./css/rootApp.css";
import Holder from "./components/holder";
import Hero from "./components/hero";
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      profiles: []
    }
  }
  componentDidMount(){
    axios.get('https://link-me-apiserver.vercel.app/api/cards').then( response =>{
      if (response.data instanceof Array)
        this.setState({profiles: response.data})
      else console.log("api not found")
      console.log(response.data)
    })
  }

  render() {
    return(
      <div className="Root-app">
      <Hero title="Nitin's" />
      <Holder profileCards={this.state.profiles} />
      </div>
    )
  }
}

export default App;