import React from "react";
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

export class User extends React.Component {
    
    onNavigateHome() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div className="container">
                <h3>The User Page</h3>
                <p>User Id: {this.props.match.params.id}</p>
                <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}