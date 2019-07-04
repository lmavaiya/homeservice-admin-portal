import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {

        const { title, handleDelete, handleEdit } = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex  justify-content-between my-2 w-25">
                <h6>{title}</h6>
                {/* <h6>{item.service_tnc}</h6>
                <h6>{item.service_charge}</h6>
                <h6>{item.service_icon}</h6> */}


                <div className="todo-icon">
                    <span className="mx-2 text-success" data-toggle="modal" data-target="#myModal" onClick={handleEdit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}