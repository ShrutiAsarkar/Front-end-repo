import React from "react";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";

// react plugin used to create charts
import jansendereks from "assets/img/jan-sendereks.jpg";
import axios from 'axios';
import {Link} from "react-router-dom";

// function that returns a color based on an interval of numbers



class Error extends React.Component {
  constructor(props){
    super(props);
    this.IsEmpty=true;
    console.log("Loogged Data:",this.props.loggedIn);

  }
  static handleSubmit() {
    console.log("clicked");
  }

  componentDidMount(){
    return this.props.loggedIn ? <Dashboard /> : "You are not logged in";
  }

}

export default Error;