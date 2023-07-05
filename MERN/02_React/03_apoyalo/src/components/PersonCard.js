import React, {Component} from "react";

class PersonCard extends Component{
    render(){
        return(
            <div className="container d-flex flex-column align-items-center">
                <div className="fs-2 fw-bold col-3">
                    {this.props.LastName}
                    {this.props.FirstName}
                </div>
                <div className="col-3">
                    {this.props.age}
                </div>
                <div className="col-3">
                    {this.props.hairColor}
                </div>
            </div>
        );
    }
}

export default PersonCard;