import React from "react";
import axios from "axios";
import {store} from "../../index";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = state => {
    return { data: state };
};


class Wallets extends React.Component {

    state={
        assetCards:[],
        employee:null,
        totalAssets: null,

    };

  constructor(props) {
    super(props);
    this.IsEmpty = false;
    console.log("post data id:", this.props.match.params);
  }

  static handleSubmit() {
    console.log("clicked");
  }

  async componentDidMount() {
      await axios.post(this.props.data.backendUrl + '/wallet',{
          user: this.props.data.id
        }
      )
          .then(response => {
              console.log("data wallet:", response.data);
              this.setState({
                  assetCards: response.data.assetCards,
                  employee: response.data.employee,
                  totalAssets: response.data.totalAssets
              });
          }, this.forceUpdate())
          .catch(error => {
              console.log(error);
          });
  }

  render() {
    return (
      <div className="content" style={{marginTop: 30, marginLeft: 70, marginRight: 70}}>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-circle-chart" style={{"borderRadius" :"1px", height: 190}}>
                  <div className="card-header">
                    <div className="card-title">
                      <p style={{fontFamily:"DIN-Light",fontSize:"30px",marginLeft:"30px"}}>Wallets</p>
                    </div>
                  </div>
                  <div className="card-content" style={{minHeight: 120, marginLeft: 0}}>
                    {this.IsEmpty ?

                      <div className="row" style={{paddingBottom: 8}}>
                        <div className="text-center" align="center">
                          <p> set up company to show your overview here</p>
                        </div>

                      </div> :
                      <div>
                        <div className="columns">
                          <div style={{float: "left", width: "25%",paddingLeft: 10}}>
                            <h1 style={{ marginRight:"40px", marginTop:"2px"}}>$1253</h1>
                            <p style={{fontFamily:"Franklin-Gothic-Book-Regular",marginLeft:"3px",marginRight:"70px", marginTop:"-10px",fontSize:"16px"}}>THIS MONTH</p>
                          </div>
                          <div style={{float: "left", width: "25%", paddingLeft: 20}}>
                            <h1 style={{ marginRight:"40px", marginTop:"4px"}}>$4356</h1>
                            <p style={{fontFamily:"Franklin-Gothic-Book-Regular",fontSize:"16px",marginRight:"80px", marginTop:"-11px"}}>THIS YEAR</p>
                          </div>
                          <div style={{float: "left", width: "25%", paddingLeft: 20}}>
                            <h1 style={{ marginRight:"156px", marginTop:"6px"}}>{this.state.assetCards.length}</h1>
                            <p style={{fontFamily:"Franklin-Gothic-Book-Regular",fontSize:"16px",marginRight:"70px", marginTop:"-13px"}}>WALLETS ADDED</p>
                          </div>
                          <div style={{float: "left", width: "25%", paddingLeft: 20}}>
                                          <h1 style={{ marginRight:"130px", marginTop:"6px"}}>{this.state.totalAssets}</h1>
                            <p style={{fontFamily:"Franklin-Gothic-Book-Regular",fontSize:"16px",marginRight:"70px", marginTop:"-13px"}}>TOTAL ASSET VALUE</p>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="row" style={{color:"white"}}>
<h3 style={{marginLeft:30 ,fontSize:"30px",fontFamily:"DIN-Medium",marginTop:"8px"}}>Your active wallets</h3>
          <div style={{display:"inline-block",marginLeft:30}}>
          <button type="button" className="btn btn-success btn-fill btn-lg" style={{marginLeft:24,backgroundColor:"#A1DF99",color:"black", fontSize:"16px",fontFamily:"DIN-Medium",width:"206px"}}>CHANGE DEFAULT</button>
          <button type="button" className="btn btn-success btn-fill btn-lg"style={{marginLeft:24, backgroundColor:"#A1DF99",color:"black", fontSize:"16px",fontFamily:"DIN-Medium",width:"206px"}}>ADD WALLET</button>
          <button type="button" className="btn btn-warning btn-fill btn-lg"style={{marginLeft:24, backgroundColor:"#FCBC28",color:"black", fontSize:"16px",fontFamily:"DIN-Medium",width:"206px"}}>TRANSFER MONEY</button>
          </div>
        </div>


            <div className="row" style={{marginLeft:5, marginTop:50}}>
                {this.state.assetCards.map((dynamicComponent, i) => {
                    console.log("component:",dynamicComponent);
                    return(
                        <div className="col-4">
                                <div className="col" >
                                        <div className="card" style={{"border-radius" :"1px" , width:"300px",height:"175px",boxShadow: 'none', backgroundImage:"url("+require('../../assets/uphold-images/cards/vintage/'+dynamicComponent.currency.toLowerCase()+'.jpg')+")",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
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
      </div>

    );
  }
}

const Wallet = connect(mapStateToProps)(Wallets);

export default Wallet;


