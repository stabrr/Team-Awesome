import React, { Component } from 'react';
import '../App.css';
// import data from "./data.json";
import API from "../utils/API";

class Login extends Component {
    

  state = {
    response: "",
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handlePassName = (nameValue) => {
    this.props.onPassName(nameValue);
    };


  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        this.state.name = res.data.name;
        this.handlePassName(this.state.name);
      })
      .catch(err => console.log(err))
    }
  };

    
    render() {
        return (
        <div className="wrapper">
            <div className="wrapperAnimation">
                <h1 className="goodVibration">
                    <span>BR<span className="redText">AI</span>N</span><br />
                    <span>DEAD</span>
                </h1>
            </div>
            
            <div className="container-fluid text-center">

                <div className="col-sm-3 col-md-4"></div>

                    <div id="login" className="well col-sm-6 col-md-4">
                        <h2>User Login</h2>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.handleFormSubmit}> 
                                   <div className="form-group text-left">
                                        <label for="email">E-Mail</label>
                                        <input type="text" className="form-control" id="username-email" placeholder="contact@example.com" name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label for="pwd">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                                     value={this.state.password}
                                    onChange={this.handleInputChange} />
                                 </div>
                                    <button type="submit" className="btn btn-lg"
                                    disabled={!(this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}>Sign In</button>
                                    <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#myModal">Register</button>	
                                </form>
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-4"></div>

                </div>

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h2 className="modal-title text-center">Create New User</h2>
                        </div>

                        <div className="modal-body">
                            <form action="/api/register" method="POST">
                                <div className="form-group">
                                    <label for="username">Username:</label>
                                    <input type="text" className="form-control" id="username" name="username" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address:</label>
                                    <input type="email" className="form-control" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd1" name="pwd1" />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Confirm Password:</label>
                                    <input type="password" className="form-control" id="pwd2" name="pwd2" />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-lg" data-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
        );
    }
}

export default Login;
