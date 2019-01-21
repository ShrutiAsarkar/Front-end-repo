import React from "react";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";
import {store} from '../../index.js';
import logo from '../../assets/img/logo.png';


const mapStateToProps = state => {
    return { data: state };
};
function updateID(id) {
    store.dispatch({type:'updateData',payload:id});
}

class Dashboard extends React.Component {

    state={
        assetCards:[],
        totalAssets:null,
        transactionList:[],
        arr:[]
    };

    constructor(props){
        super(props);
        this.IsEmpty=true;
        console.log("user id:",this.props.data.id);
        console.log("dashboard state data:",this.props.data);
        updateID(this.props.match.params.id);
    }


    static handleSubmit() {
        console.log("clicked");
    }

    async componentDidMount(){
        await axios.post(this.props.data.backendUrl + '/dashboard',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    data: {userId: this.props.data.id},
                    userId: this.props.data.id,
                    assetCards: response.data.assetCards,
                    totalAssets: response.data.totalAssets,
                    data1:response.data.data1
                });
                store.dispatch({type:'updateUser',payload:response.data.userName});
            },this.forceUpdate())
            .catch(error => {
                console.log(error);
            });
    }
    render() {


        return (
            <div className="content" style={{marginTop: 1, marginLeft: 0, marginRight: 0}}>
                <div className="row" style={{height: 75}}>
                    <nav className="navbar navbar-default" style={{"borderRadius" :"0px" , width:"1300px"}}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div style={{color : "black", marginLeft: 500}}>
                                <i className="fas fa-home" style={{marginLeft:20}}></i>Dashborad
                                <p style={{backgroundColor:"#f47500", color: "white", fontSize:12, paddingLeft:"10px", paddingTop:"5px",  marginLeft:20, width:80, height:30, borderRadius:"5px"}}>₹ 0.00  INR</p>
                                <i className="far fa-user-circle" style={{marginLeft:10}}></i>
                                <p style={{marginLeft:10}}>@Shrutias</p>
                                <button type="button" class="btn btn-default" data-toggle="dropdown">
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li style={{color : "black", marginLeft: 800}}><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row" style={{height: 150}}>
                    <nav className="navbar navbar-default" style={{"borderRadius" :"0px" , width:"1300px", backgroundColor:'#753800'}}>
                        <div className="container-fluid">
                            <div class="d-flex justify-content-start" style={{color : "white", marginLeft: 10, marginTop: 0, marginRight: 0}}>
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">Available Balanace</div>
                                    <div className="p-2 bd-highlight">₹ 0.00  INR</div>                              </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <ul className= "list-inline">
                                    <li class="active" style={{color : "black", marginLeft: 500}}><a href="#">OVERVIEW</a></li>
                                    <li><a href="#">CARDS</a></li>
                                    <li><a href="#">ACTIVITY</a></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row" style={{height: 50}}>
                    <div className="d-flex justify-content-start" style={{marginLeft: 65}}>
                        <p className="text-muted">FAVOURITE CARDS</p>
                    </div>
                    <div className="d-flex justify-content-end" style={{marginLeft: 800}}>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i><p className="text-success">Add card/currency</p>
                        <p className="text-muted">|</p>
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span className="glyphicon glyphicon-edit"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                        {this.state.assetCards.map((dynamicComponent, i) => {
                            let pic= dynamicComponent.currency.toLowerCase();
                            console.log("component:",pic);
                            return(
                                <div className="row">
                                    <div className="col-4" >
                                        <div className="card" style={{"border-radius" :"1px", marginLeft:"60px", width:"350px",height:"200px",boxShadow: 'none', backgroundImage:"url("+require('../../assets/uphold-images/cards/vintage/'+dynamicComponent.currency.toLowerCase()+'.jpg')+")",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                                            <div className="card-header text-center" >
                                                <h4 className="card-title"
                                                    style={{color: 'white', textAlign: 'start', paddingLeft: 10, marginBottom: 0}}>
                                                </h4>
                                            </div>
                                            <div className="card-content" style={{height: 100,align:'center',fontSize:20}}>
                                                <strong style={{color: 'white'}}>   {dynamicComponent.currency}<br/>
                                                    {dynamicComponent.amt}<br/><br/></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

        );
    }
}

const List = connect(mapStateToProps)(Dashboard);

export default List;
