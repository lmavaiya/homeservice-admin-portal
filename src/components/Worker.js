import React, { Component } from 'react';
import WorkerCard from './WorkerCard';
import axios from 'axios';
// import $ from 'jquery';

export default class Worker extends Component {

    constructor() {
        super();
        this.state = {
            workerList: [],
            pendingWorkerList:[],
        }
    }

    getWorkerList = async () => {
        await fetch('https://worker-service03.herokuapp.com/worker')
            .then((response) => response.json())
            .then((responseJson) => {
                // alert(JSON.stringify(responseJson));
                this.setState({
                    workerList: responseJson,
                })

                var responseNew = responseJson.filter((e) => {
                    return e.status === 0;
                });
                this.setState({
                    pendingWorkerList: responseNew,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateStatus = async (id) => {

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        // alert(id);
        var update_body = new URLSearchParams();
        update_body.append('id', id);

        await axios.post('https://worker-service03.herokuapp.com/update_status/', update_body, config)
            .then((response) => {
                // alert(JSON.stringify(response));
                this.getWorkerList();
            })
            .catch(function (error) {
                alert(error);
            });
    }
    componentDidMount = async () => {
        await this.getWorkerList()
    }

    render() {
        const { workerList,pendingWorkerList } = this.state;
        return (

            <div className="container-fluid ml-0 p-0 card" style={{minHeight:200}}>

                {/* <div className="container-fluid mt-3 btn btn-outline-success">
                    <h2 className="my-3">Manage Worker</h2>
                </div> */}

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active btn" data-toggle="tab" href="#home">Worker Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn"   data-toggle="tab" href="#menu1">Worker List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" data-toggle="tab" href="#menu2">New Worker Request</a>
                    </li>
                </ul>


                <div className="tab-content bg-white">
                    <div id="home" className="container tab-pane active"><br />

                    <div className="row">

<div class="text-center col-md-3 col-sm-12">
    <div class="mr-2">
        <div class="card w-100" style={{height:120}}>
            <div class="card-body">
                <button type="button" className="btn btn-primary">
                    Registered Worker <span className="badge badge-light">50</span>
                </button>
            </div>
        </div>
    </div>
</div>

<div class="text-center col-md-3 col-sm-12">
    <div class="mr-2">
        <div class="card w-100" style={{height:120}}>
            <div class="card-body">
                <button type="button" className="btn btn-success m-2">
                    Approved Worker <span className="badge badge-light">35</span>
                </button>
            </div>
        </div>
    </div>
</div>

<div class="text-center col-md-3 col-sm-12">
    <div class="mr-2">
        <div class="card w-100" style={{height:120}}>
            <div class="card-body">
                <button type="button" className="btn btn-warning m-2">
                    Pending Request <span className="badge badge-light">15</span>
                </button>
            </div>
        </div>
    </div>
</div>

<div class="text-center col-md-3 col-sm-12">
    <div class="mr-2">
        <div class="card w-100" style={{height:120}}>
            <div class="card-body">
                <button type="button" className="btn btn-success m-2">
                    Completed Request <span className="badge badge-light">100</span>
                </button>
            </div>
        </div>
    </div>
</div>

</div>

                    </div>
                    <div id="menu1" className="container tab-pane fade"><br />
                        <div className="d-flex justify-content-start flex-wrap">
                            {
                                workerList.map(item => {
                                    return (
                                        <WorkerCard
                                            key={item._id}
                                            item={item}
                                            updateStatus={this.updateStatus}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div id="menu2" className="container-fluid m-0 p-0 tab-pane fade"><br />
                        <div class="card p-0 m-0" style={{ display: pendingWorkerList.length === 0 ? 'none' : '' }}>
                            <table className="table">
                                <thead className="card-header">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Work Type</th>
                                        <th>Approve</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {pendingWorkerList.map(item => {
                                        return (

                                            <tr className="m-0" key={item._id}>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.work_type}</td>
                                                <td>
                                                    <label className="switch">
                                                        <input type="checkbox" onChange={() => this.updateStatus(item._id)} checked={item.status} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                            </tr>

                                        )
                                    })}

                                    {pendingWorkerList.map(item => {
                                        return (

                                            <tr className="m-0" key={item._id}>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.work_type}</td>
                                                <td>
                                                    <label className="switch">
                                                        <input type="checkbox" onChange={() => this.updateStatus(item._id)} checked={item.status} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                            </tr>

                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
