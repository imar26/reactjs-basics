import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
    render() {
        var text = "Something!";
        return (
            <div>
                <p>In a new component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <p>Hobbies</p>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};