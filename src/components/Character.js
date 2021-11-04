import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Character extends Component {
    render() {
        console.log(this.props)
        return (
                <div className="col-3 d-flex  flex-column bg-light p-3 border rounded border-1 m-3">
                        <img className="img-fluid rounded" src={this.props.image} styles={{width: "200px" , height:"200px"}} alt={this.props.name}></img>
                        <h1 className="text-center">{this.props.name}</h1>
                        <h2 className="text-center">{this.props.title}</h2>
                </div>

        );
    }
}

export default Character;