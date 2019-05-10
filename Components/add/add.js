import React,{Component, Fragment} from 'react';

export default class Add extends Component{
    constructor(props){
        super(props);

        this.Amount = React.createRef();
    }

    addNewRecord = () => {
        this.props.addLocalData(this.Amount.current.value)
    }

    render(){
        return(<div style={{margin:"20px"}}>
            <input type="text" placeholder="Type in the Amount" ref={this.Amount}></input>
            <button onClick={this.addNewRecord}>Save</button>
        </div>)
    }
}