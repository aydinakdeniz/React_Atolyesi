import React, { Component } from "react"
import PropTypes from 'prop-types'

class User extends Component {
  
  state={isVisible:false}

  // constructor(props){

  //   super(props)
  //   this.onClickEvent=this.onClickEvent.bind(this)

    
  // }

onClickEvent=(e)=>{
  this.setState(
    {
      isVisible: !this.state.isVisible
    }
  )
}

  render() {

    const {name,departman,salary} = this.props;
    const {isVisible} = this.state;

    return (
      
    <div className="col-md-8 mb-4">

      
       <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
            <i className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
       </div>

       {
        isVisible ? <div className="card-body">
      
                        <p className="card-text">Maaş     :    {salary}</p>
                        <p className="card-text">Departman:    {departman}</p>
        
   
                    </div>:null
       }

       

       

    </div>
    </div>

    )
  }
  
}

User.propTypes={
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  departman: PropTypes.string.isRequired
}

User.defaultProps={
  name: "Default Name Ayd",
  salary: "Default 0 TL",
  departman: "Default departman"
}
export default User;