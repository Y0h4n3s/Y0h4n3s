import React, {useState} from 'react'

export default class ProjectsPage extends React.Component {

  render() {
    return (
      <div className="projects-container">

      </div>
    )
  }
}


const ProjectBox = (props) => {
  return (
    <div className="project-box">
      <div className="project-components">
        <img className="" src={props.screenshot} alt={props.screenshotDescription} />

      </div>
    </div>
  )
}