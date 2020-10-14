import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      blog : {
        id: '',
        location: '',
        camp_spot: '',
        date: '',
        notes: '',
        reminders: ''
      },
      blogs: []
    }
  }
  componentDidMount(){
    this.getBlogs()
  }

  getBlogs = () => {
    fetch('/blogs')
    console.log("we here")
    .then((resp) => {
      if(resp.ok){
        return resp.json()
        console.log("okay")
      }
      else{
        console.log('error')
      }
    })
    .then((blogs) => {
      this.setState({ blogs: blogs})
    })

  }


  render () {
    const { blogs } = this.state
    return (
      <Router>
      <React.Fragment>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        <div>
          <h1>Hello World</h1>
        </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App
