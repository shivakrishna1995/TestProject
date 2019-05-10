import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import AppBar from './Components/appBar/appBar';
import Display from './Components/display/display'
import Add from './Components/add/add'
import AlertDialouge from './Components/alertDialouge/alertDialouge'

class Main extends Component{
    constructor(props){
        super(props);

        this.state ={
            activeTab:"View",
            localData:[],
            showAlertDialouge:false,
            actUpdateId:null
        }
    }

    tabChanged = (Tab) => {
        this.setState({
            activeTab : Tab
        })
    }

    addLocalData = (amount) => {
        this.setState({
            localData : [...this.state.localData,{"Id" : new Date().getTime()+"","Amount" : amount, "Date":new Date()+""}]
        })
    }

    deleteData = (id) => {
        this.setState({
            localData : this.state.localData.filter(key => key["Id"] != id)
        })
    }

    toggleAlertDialouge = (id) => {
        this.setState({
            showAlertDialouge : ! this.state.showAlertDialouge,
            actUpdateId : id
        })
    }

    updateData = (amount) => {
        const index = this.state.localData.findIndex(obj => obj["Id"] == this.state.actUpdateId);
        this.setState({
            localData: [...this.state.localData,this.state.localData[index]["Amount"]=amount]
        })
    }

    render(){
        return(<div style={{display:"flex",flexDirection:"column"}}>
            <AppBar tabChanged={this.tabChanged}/>
            {this.state.activeTab == "View" ? <Display toggleAlertDialouge={this.toggleAlertDialouge} deleteData={this.deleteData} localData={this.state.localData}/> : <Add addLocalData={this.addLocalData}/>}
            {this.state.showAlertDialouge ? <AlertDialouge updateData={this.updateData} toggleAlertDialouge={this.toggleAlertDialouge}/> : ""}
        </div>)
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));