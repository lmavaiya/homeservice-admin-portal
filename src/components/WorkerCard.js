import React, { Component } from 'react'

export default class WorkerCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="m-1">

                <div className="card w-100" style={{ fontSize: 14 }}>

                    <div className="card-body">
                        <p className="justify-content-center border-bottom"> <span style={{fontSize:28}}>{item.name} </span><span className={item.status?"badge badge-success float-right align-self-center":"badge badge-danger float-right align-self-center"}>{item.status ? "Approved" : "Pending"}</span> </p>
                        <p><span className="font-weight-bold">Email :</span> {item.email}</p>
                        <p><span className="font-weight-bold">Phone :</span>{item.phone}</p>
                        <p><span className="font-weight-bold">Gender:</span>{item.gender}</p>
                        <p><span className="font-weight-bold">DOB :</span>{item.date_of_birth}</p>
                        <p><span className="font-weight-bold">Address :</span>{item.address}</p>
                        <p><span className="font-weight-bold">Work Type :</span>{item.work_type}</p>
                        <p><span className="font-weight-bold">Join On :</span>{item.registered_on}</p>
                        <p><span className="font-weight-bold">Status :</span>{item.status ? "Approved" : "Pending"}</p>
                    </div>
                </div>
                {/* <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                <p>{item.gender}</p>
                <p>{item.date_of_birth}</p>
                <p>{item.address}</p>
                <p>{item.work_type}</p>
                <p>{item.registered_on}</p> */}
                {/* <p>{item.status?"Approved":"Pending"}</p> */}

                {/* {JSON.stringify(item)} */}
            </div>
        )
    }
}
