import React, { Component } from 'react'

export default class WorkerCard extends Component {
    render() {
        const { item, updateStatus } = this.props;
        return (
            <div className="m-1">

                <div className="card w-100" style={{ fontSize: 14 }}>

                    <div className="card-body">
                        <p data-toggle="tooltip" title="Change Status" onClick ={() => updateStatus(item._id)} checked={item.status}  className={item.status ? "btn badge badge-success float-right align-self-center" : "btn badge badge-danger float-right align-self-center"}>{item.status ? "Verified" : "New"}</p>
                       {/* <br></br> */}
                       {/* <label className="switch float-right pr-0">
                                <input type="checkbox" onChange={() => updateStatus(item._id)} checked={item.status} />
                                <span className="slider round"></span>
                            </label> */}
                        <p className="justify-content-center border-bottom">
                            <span style={{ fontSize: 28 }}>{item.name} </span>
                           
                        </p>
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
            </div>
        )
    }
}
