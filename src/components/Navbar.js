import React from "react"
import ReactPropTypes  from "prop-types";
function Navbar (props){

    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )

}
Navbar.propTypes ={
    title: ReactPropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Default App"
}
export default Navbar;

