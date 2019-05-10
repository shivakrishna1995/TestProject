import React,{Component, Fragment} from 'react';

export default class AppBar extends Component{
    render(){
        return(<Fragment>
            <ul style={{margin:"0px",padding:"0px"}}>
                {["View", "Add"].map(item => <li style={{float:"left",display:"block",margin:"20px",textDecoration:"underline",color:"blue",cursor:"pointer"}} onClick={() => this.props.tabChanged(item)}>{item}</li>)}
            </ul>
        </Fragment>)
    }
}