import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h1>Hello Home</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
