import React, { Component, Fragment } from 'react';

export default class Display extends Component {
    render() {
        return (<table style={{ margin: "20px"}}>
            <tr><th>Id</th><th>Amount</th><th>Date</th><th>EDIT</th><th>DELETE</th></tr>
            {this.props.localData.map(item => {
                if(item["Id"]!=undefined)
                {
                    return <tr style={{textAlign:"center"}}>
                    <td>{item["Id"]}</td>
                    <td>{item["Amount"]}</td>
                    <td>{item["Date"]}</td>
                    <td><button onClick={()=>this.props.toggleAlertDialouge(item["Id"])}>Update</button></td>
                    <td><button onClick={()=>this.props.deleteData(item["Id"])}>Delete</button></td>
                </tr>
                }
                else{
                    return ""
                }
            })}
        </table>)
    }
}