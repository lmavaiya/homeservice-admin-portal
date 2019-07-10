import React, { Component } from 'react'
import HistoryCard from '../HistoryCard';

export default class History extends Component {


    constructor() {
        super()
        this.state = {
            data: [],
        }

        this.getData = this.getData.bind(this);
    }


    getData = () => {
        fetch('https://booking-service01.herokuapp.com/booking')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                })
                // alert(this.state.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    async componentDidMount() {
        await this.getData()
    }


    render() {

        const { data } = this.state;
        return (
            <div className="row">
                {
                    data.map(item => {
                        return (
                            <HistoryCard
                                key={item._id}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
