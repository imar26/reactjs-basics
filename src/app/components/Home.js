import React from "react";
// import PropTypes from 'prop-types';

// export class Home extends React.Component {

//     constructor(props) {
//         super();
//         this.state = {
//             age: props.initialAge,
//             status: 0,
//             homeLink: props.initialLinkName
//         };
//         setTimeout(() => {
//             this.setState({
//                 status: 1
//             });
//         },3000);
//         console.log("const");
//     }

//     componentWillMount() {
//         console.log("componentWillMount");
//     }

//     componentDidMount() {
//         console.log("componentDidMount");
//     }

//     componentWillReceiveProps(nextProps) {
//         console.log("componentWillReceiveProps", nextProps);
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("shouldComponentUpdate", nextProps, nextState);
//         // if(nextState.status === 1) {
//         //     return false;
//         // }
//         return true;
//     }

//     componentWillUpdate(nextProps, nextState) {
//         console.log("componentWillUpdate", nextProps, nextState);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("componentDidUpdate", prevProps, prevState);
//     }

//     componentWillUnmount() {
//         console.log("componentWillUnmount");
//     }

//     onMakeOlder() {
//         this.setState({
//             age: this.state.age + 3
//         });
//     }

//     onChangeLink() {
//         this.props.changeLink(this.state.homeLink);
//     }

//     onHandleChange(event) {
//         this.setState({
//             homeLink: event.target.value
//         });
//     }

//     render() {
//         var text = "Something!";
//         return (
//             <div>
//                 <p>In a new component!</p>
//                 <p>{text}</p>
//                 <p>Your name is {this.props.name}</p>
//                 <p>Your age is {this.state.age}</p>
//                 <p>Status: {this.state.status}</p>
//                 <hr/>
//                 <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
//                 <hr/>
//                 <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
//                 <hr/>
//                 <input type="text" value={this.state.homeLink} 
//                     onChange={(event) => this.onHandleChange(event)} />
//                 <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
//             </div>
//         );
//     }
// }

// Home.propTypes = {
//     name: PropTypes.string,
//     initialAge: PropTypes.number,
//     greet: PropTypes.func,
//     initialLinkName: PropTypes.string
// };

export class Home extends React.Component {
    render() {
        return(
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}