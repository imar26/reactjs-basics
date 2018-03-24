import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

// import { Header } from "./components/Header";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

// class App extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             homeLink: "Home",
//             homeMounted: true
//         };
//     }

//     onGreet() {
//         alert("Hello!");
//     }

//     onChangeLinkName(newName) {
//         this.setState({
//             homeLink: newName
//         });
//     }

//     onChangeHomeMounted() {
//         this.setState({
//             homeMounted: !this.state.homeMounted
//         });
//     }

//     render() {
//         let homeCom = "";
//         if(this.state.homeMounted) {
//             homeCom = (
//                 <Home name={"Max"} 
//                     initialAge={27} 
//                     greet={this.onGreet}
//                     changeLink={this.onChangeLinkName.bind(this)}
//                     initialLinkName={this.state.homeLink}
//                 />
//             );
//         }
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-1">
//                         <Header homeLink={this.state.homeLink}/>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-1">
//                         {homeCom}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-1">
//                         <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">UnMount Home Component</button>
//                     </div>
//                 </div>
//             </div>
//         );    
//     }
// }

ReactDOM.render((
    <Router history={history}>
        <div>
            <Route path="/" component={Root} />
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route path="/home" component={Home} />
        </div>
    </Router>
), document.getElementById("app"));