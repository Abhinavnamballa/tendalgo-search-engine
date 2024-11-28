import React, { Component } from 'react';



class Header extends React.Component{
constructor(props){
    super(props)
    this.state = {
        value: ""
    }
}




render(){
    return(
    <div className="title">
        <span className="Logo">
        <img href="abhinavnamballa.io"src="Tendime.png" width="200px" alt="Logo"></img>
        </span>
        <span className="Titletag">
        <h1>TENDALGO</h1>
        <h3>Artifact Search Engine</h3>
        <h5>Version 1.0.0</h5>
        </span>
        <span className="contact">
            <h5>Suggestions? <br></br> Contact Me:</h5>            
        </span>

    </div>
    )
}
}

export default Header;
