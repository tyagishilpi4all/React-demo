import React from 'react';
import { connect } from "react-redux";
import  {ApiCall}  from "./store/actions/index.action";
class App extends React.Component{
    actionFire=()=>{
        this.props.$apicall("abc")
    }
    render(){
        console.log(this.props._apicall);
        return(
            <React.Fragment>
                <h1>Hello</h1>
                <button onClick={this.actionFire}>on Click </button>
            </React.Fragment>
        )
    }
}
const mapState = ({
    apicall, 
}) => {
    return {
        _apicall: apicall,
    };
};
const mapDispatch = dispatchEvent => ({
    $apicall :values=> dispatchEvent(ApiCall(values))
});
export default connect(
    mapState,
    mapDispatch
)(App);