import './Team.css'
import React, { Component } from 'react'

export default class Single extends Component {
  constructor(props){
    super()
    
  }
  render() {
    const {name, age, skill, img, index, layout} = this.props

    return (
      <>
      <div className="col-lg-3 my-3">
          <div className={'team-member ' + layout}>
              <div className="card shadow-sm">
              <img className="card-img-top" src={ img } alt={ index }/>
              <div className="card-body">
                  <h4 className="card-title">{ name }</h4>
                  <p className="card-text">Age { age }, Serial { index + 1 }</p>
                  <p style={{color : 'red', fontWeight : 700}} className="card-text">{ skill }</p>
              </div>
              </div>
          </div>
      </div>
      </>
    )
  }
}

