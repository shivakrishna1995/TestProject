import React, { Component, Fragment } from 'react';

export default class AlertDialouge extends Component {
    constructor(props){
        super(props);

        this.EditInput = React.createRef();
    }

    render() {
        return (<div style={{position:"absolute",width:"100%",height:"100%",left:0,top:0,background:"rgba(0,0,0,0.05)"}}>
        <div style={{width:"20%",height:"10%",background:"white",display:"flex",margin:"70px auto auto auto",boxShadow:"0px 0px 3px grey"}}>
            <input style={{height:"30px",alignSelf:"center",width:"65%",marginLeft:10}} ref={this.EditInput} placeholder="Type in the amount..."></input>
            <button style={{height:"30px",alignSelf:"center"}} onClick={()=>this.props.updateData(this.EditInput.current.value)}>update</button>
            <button style={{height:"30px",alignSelf:"center"}} onClick={this.props.toggleAlertDialouge}>close</button>
        </div>
        </div>)
    }
}