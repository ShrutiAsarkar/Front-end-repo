import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
import {store} from '../../index.js';

var ps;
var color = {
  backgroundColor: "black",
};

const mapStateToProps = state => {
  return { data: state };
};

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    console.log("layout:",this.props.data);
    this.state = {
      backgroundColor: "white",
      activeColor: "info",
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  }
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  }
  render() {
    return (
        <div className="wrapper">
          <Sidebar
              {...this.props}
              routes={dashboardRoutes}
              bgColor={this.state.backgroundColor}
              activeColor={this.state.activeColor}
          />
          <div className="main-panel" ref="mainPanel" style={{backgroundColor:'black',overflowY:'scroll' }} >
            <p style={{color:"white",paddingLeft:"6.6%",marginTop:"50.6px",marginBottom:"1%",fontSize:"30px",fontFamily:'DIN'}}>Welcome {this.props.data.userName}
              {/*{*/}
              {/*console.log(this.props)*/}
              {/*this.props.data.userName ? this.props.data.userName : 'User'*/}
              {/*}*/}
            </p>
            <Switch>
              {dashboardRoutes.map((prop, key) => {
                if (prop.pro) {
                  return null;
                }
                if (prop.redirect) {
                  return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
                }
                return (
                    <Route path={prop.path} component={prop.component} key={key} />
                );
              })}
            </Switch>
            <Footer fluid />
          </div>

        </div>
    );
  }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;
//export default Dashboard;