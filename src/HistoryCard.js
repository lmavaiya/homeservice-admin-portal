import React, { Component } from 'react'

export default class HistoryCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="w-25">

            <div className="m-1">
            <div className="card w-100" style={{ fontSize: 14 }}>

                <div className="card-body">
                        <p className="justify-content-center border-bottom"> 
                        <span style={{fontSize:28}}> Client Name </span><span className={item.status?"badge badge-info float-right align-self-center":"badge badge-danger float-right align-self-center"}>{item.status ? "In Progress" : "Completed"}</span> 
                        </p>
                        <p><span className="font-weight-bold">Worker :</span>Worker Name</p>
                        <p><span className="font-weight-bold">Address :</span>{item.address}</p>
                        <p><span className="font-weight-bold">Payment :</span>{item.total_amount}</p>
                        <p><span className="font-weight-bold">Service On:</span>29 July 2019</p>
                        <p><span className="font-weight-bold">Request Date:</span>20 July 2019</p>
                        <p><span className="font-weight-bold">Closing Date :</span>29 July 2019</p>
                        {/* <p><span className="font-weight-bold">Status :</span>{item.status ? "In Progress" : "Pending"}</p> */}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}