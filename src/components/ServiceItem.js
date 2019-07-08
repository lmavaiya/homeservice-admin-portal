import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {

        const { item, handleDelete, handleEdit } = this.props;

        return (
            <div className="col-md-3 col-sm-12">
                <div class="card w-100 m-1">
                    <div class="card-header bg-success text-white font-weight-bold">{item.service_name}</div>
                    <div class="card-body">
                        <p><span className="font-weight-bold">Terms & Conditions :</span>{item.service_tnc}</p>
                        <p><span className="font-weight-bold"> Service Charge: </span>{item.service_charge}</p>
                    </div>
                    <div class="card-footer bg-white text-center font-weight-lighter">

                        <button className="btn btn-outline-info mx-1 " data-toggle="modal" data-target="#myModal" onClick={handleEdit}>Edit</button>
                        <button className="btn btn-outline-danger mx-1" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}