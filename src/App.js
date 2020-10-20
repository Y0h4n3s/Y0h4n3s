import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import NavigationPanel from './components/NavigationPanel'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import UnderConstruction from './components/UnderConstruction'
import './style/style.scss'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: '/home'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    let reloadedPage = window.location.pathname
    this.setState({
      currentPage: reloadedPage
    })
  }

  handleClick(e) {
		const newAncor = e.target.pathname
		this.setState({
			currentPage: newAncor
    })
	}
  
  render() {
    return (
      <BrowserRouter>
        <nav className="nav-section">
          <NavigationPanel onClick={this.handleClick} page={this.state.currentPage} />
        </nav>
        <main className="main-section">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage onClick={this.handleClick} />
          </Route>

          <Route path="/profile" component={UnderConstruction} />
          
          <Route path="/projects">
            <ProjectsPage onClick={this.handleClick} />
          </Route>
          
          <Route path="/contact-me" component={UnderConstruction} />

        </main>
      </BrowserRouter>

    )
  }
}