import React from "react";

// react plugin used to create charts
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import empIndexRoutes from "empRoutes/index.jsx";
import {createBrowserHistory} from "history";
const hist = createBrowserHistory();


// function that returns a color based on an interval of numbers



class EmployeeRoute extends React.Component {
    constructor(props){
        super(props);
    }
    state= {

    };

    render() {
        return (

            <Router history={hist}>
                <Switch>
                    {empIndexRoutes.map((prop, key) => {
                        return <Route path={prop.path} key={key} component={prop.component} />;
                        // return <Route path
                    })}
                </Switch>
            </Router>

                );
                }
                }

                export default EmployeeRoute;
