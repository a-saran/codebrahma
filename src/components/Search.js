import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
    state = {
        datas: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${id}&apiKey=91a53883772d44bf8ee89d81249d4ac7`);

        const result = res.data.articles;

        this.setState({
            datas: result
        })
        //console.log(result)
    }

    render() {
        const { datas } = this.state;
        return (
            <div className="container">
                <h1>Search Results</h1>
                {datas.map(data => (
                    <div className="card card-body mb-3">
                        <h4>{data.author}
                        </h4>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={data.urlToImage} style={{
                                    height: '250px',
                                    background: 'cover',
                                    width: '350px'
                                }} alt="" />
                            </div>
                            <div className="col-md-8">
                                <ul className="list-group">
                                    <li className="list-group-item"><b>Title: </b>{data.title}</li>
                                    <li className="list-group-item"><b>Description: </b> {data.description}</li>
                                    <li className="list-group-item"><b>Content: </b>{data.content}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}
