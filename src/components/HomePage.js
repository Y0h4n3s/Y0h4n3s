import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="home-page-container">
        <span className="page-heading">Hello,</span>
        <h2>I'm Yohanes</h2>
        <h3>a full-stack developer.</h3>
        <Link to='/profile' className="profile-link" onClick={this.props.onClick}>
          Profile <span className="arrow">&rarr;</span>
        </Link>
        
      </div>
        
      
    )
  }
}

