import React, { Component } from 'react';
import axios from 'axios';


export default class Lists extends Component {
    state = {
        datas: [],
        sortData: 'Dessending',
        search: ''
    }

    async componentDidMount() {
        const res = await axios.get("https://newsapi.org/v1/sources");
        console.log(res.data.sources)
        this.setState({ datas: res.data.sources })
    }

    onSort = () => {
        const { sortData, datas } = this.state;
        if (sortData === 'Asscending') {
            // console.log('assecding')
            datas.sort(function (a, b) {
                return ((a.name === b.name) ? 0 : ((a.name > b.name) ? 1 : -1));
            });
            this.setState({ datas, sortData: 'Dessending' });
        }
        if (sortData === 'Dessending') {
            // console.log('dessending')
            datas.sort(function (a, b) {
                return ((b.name === a.name) ? 0 : ((b.name > a.name) ? 1 : -1));
            });
            this.setState({ datas, sortData: 'Asscending' });
        }
    }
    onChange = e => this.setState({ search: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.search}`);
    }

    render() {
        const { datas, sortData } = this.state;
        return (
            <div className="container">
                <h1 className="display-4 mb-2"><span className="text-danger">Article</span> List </h1>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={this.onSort}>Sort By({sortData})</button>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" onChange={this.onChange} placeholder="Search Article" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="submit">Button</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <hr />

                {datas.map(data => (
                    <div className="card card-body mb-3">
                        <h4>{data.name}
                        </h4>

                        <ul className="list-group">
                            <li className="list-group-item"><b>Description: </b> {data.description}</li>
                            <li className="list-group-item"><b>Category: </b>{data.category}</li>
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}
