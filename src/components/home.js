import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from "../images/logo.svg";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav title="React Guide"/>
        {/* <Header title="React Guide"/> */} 
        <Body/>
        <Footer title="Mentor Class React JS 2018"/>
        <State/>
        <Clock/>
      </div>
    )
  }
}

//header element
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-left">
          <img src={Logo} className="logo-nav" alt="logo react"/>
          <p className="title">{this.props.title}</p>
        </div>
        
        <ul className="nav-right" role="navigation">
          <li><Link className="link-menu" to="#">Home</Link></li>
          <li><Link className="link-menu" to="/page2">Page two</Link></li>
          <li><Link className="link-menu" to="/page3">Page three</Link></li>
        </ul>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return(
      <div className="body">
        <Header title="Do you React?"/>
        <Overview title="Overview"/> 
        <Tutorials title="Tutorials"/>
      </div>
    )
  }
}

// HEADER START 

class Header extends Component {
  render(){
    return (
      <div className="header container-full">
        <img src={Logo} className="logo" alt="logo react"/>
        <h1 className="headline">{this.props.title}</h1>
      </div>
    )
  }
}

//Petya OVERVIEW START
class Overview extends Component {
  render() {
    return (
      <div className="overview container-full">
        <h1 className="headline">{this.props.title}</h1>
        <div className="row-3">
          <div className="column-3">
          <h3 className="headline">Introduction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="column-3">
          <h3 className="headline">About Documentation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="column-3">
          <h3 className="headline">About Tutorials</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <button>Read more</button>
      </div>
    )
  }
}

class Tutorials extends Component {
  render() {
    return (
      <div className="tutorials container-full"> 
        <h1 className="headline">{this.props.title}</h1>
        <div className="row-2">
        <div className="column-2">
          <p>Tutorial 1</p>
          <button>Read more</button>
        </div>
        <div className="column-2">
          <p>Tutorial 2</p>
          <button>Read more</button>
        </div>
        </div>

      </div>
    )
  }
}

class Footer extends Component{
	render() {
		return(
		<div className="footer">
    		<p className="title">{this.props.title}</p>
		</div>
		)
	}
}


// EXAMPLES WITH STATE. A COUNTER, A DYNAMIC MESSAGE AND A CLOCK

const h2Style = {
  color: 'black'
};

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            message: "Gallant Fox"
        };
    }

    UpdateCount = () => {
        this.setState({ clicks: this.state.clicks + 1});
    }

    UpdateMessage = () => {
        this.setState({ message: "War admiral"});
    }

    render() {
        return (
            <div>
                <h2 style={h2Style}>{this.state.clicks}</h2>
                <button onClick = {this.UpdateCount}>Click to count</button>
                <h2 style={h2Style}>{this.state.message}</h2>
                <button onClick = {this.UpdateMessage}>Update the message</button>
            </div>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2 style={h2Style}>The time is now: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Home;