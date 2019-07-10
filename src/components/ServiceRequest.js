import React, { Component } from 'react';
import axios from 'axios';

export default class ServiceRequest extends Component {

    constructor() {
        super();
        this.state = {
            workerList: [],
            ServiceList: []
        }
    }

    getWorkerList = async () => {
        await fetch('https://worker-service03.herokuapp.com/worker')
            .then((response) => response.json())
            .then((responseJson) => {
                var responseNew = responseJson.filter((e) => {
                    return e.status === 0;
                });
                this.setState({
                    workerList: responseNew,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    getNewServiceList = async () => {
        await fetch('https://worker-service03.herokuapp.com/worker')
            .then((response) => response.json())
            .then((responseJson) => {
                var responseNew = responseJson.filter((e) => {
                    return e.status === 0;
                });
                this.setState({
                    ServiceList: responseNew,
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
        await this.getWorkerList();
        await this.getNewServiceList();
    }


    render() {
        const { ServiceList } = this.state;
        return (
            <div>
                <div class="text-center" style={{ display: ServiceList.length === 0 ? 'none' : '' }}>
                    <div class="card w-100">
                        {/* <div class="card-header text-black font-weight-bold"> New Service Request </div> */}
                        <div class="card-body p-0">
                            <table className="table rounded" style={{ display: ServiceList.length === 0 ? 'none' : '' }}>
                                <thead className="card-header">
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Work Type</th>
                                        <th>Assign to</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {ServiceList.map(item => {
                                        return (

                                            <tr className="border-warning" key={item._id}>
                                                <td>1</td>
                                                <td>Ankit Mehta</td>
                                                <td>Plumber</td>
                                                <td>
                                                    <div className="">
                                                        <select className="" id="exampleFormControlSelect1">
                                                            <option>Plumber A</option>
                                                            <option>Plumber B</option>
                                                            <option>Plumber C</option>
                                                            <option>Plumber D</option>
                                                            <option>Plumber E</option>
                                                        </select>
                                                    </div>
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
