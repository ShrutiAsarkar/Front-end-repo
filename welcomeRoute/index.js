import React from "react";
import {store} from '../index.js';
import {createBrowserHistory} from "history";
import connect from "react-redux/es/connect/connect";
const hist = createBrowserHistory();
let loggedIn;


const mapStateToProps = state => {
    return { data: state };
};


class WelcomeRoute extends React.Component {
    constructor(props){
        super(props);
    }
    state= {
        data: {userId: null},
        userId: null,
        employeeOverview: null,
        companyOverview: null,
        payrollOverview: null
    };



    async componentDidMount(){

        if(this.props.match.params.id && this.props.match.params.role)
        {
            store.dispatch({type:'updateInfo',payload:{id:this.props.match.params.id,role:this.props.match.params.role}});
            if (this.props.match.params.role == "employee"){
                loggedIn = false;

            } else if(this.props.match.params.role == "employer"){
                loggedIn = true;
            }
            else{
                console.log("Unexpected path....");
            }

        }
        else {
            if(this.props.data.role == "employee")
                loggedIn = false;
            else if(this.props.data.role == "employer")
                loggedIn = true;

        }

        if(loggedIn) {
            this.props.history.push('/employer');
        } else {
            this.props.history.push('/employee');
        }


    }
    render() {
        return "hello world";
    }
}
const List = connect(mapStateToProps)(WelcomeRoute);

export default List;

