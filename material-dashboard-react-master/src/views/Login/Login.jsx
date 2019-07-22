import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Admin from "layouts/Admin.jsx";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import RTL from "layouts/RTL.jsx";
import PropTypes from "prop-types";

const hist = createBrowserHistory();
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
class Login extends React.Component{
	constructor() {
		super()
		this.state = {
		  login: false,
		  user: false,
		  email: '',
		  password: '',
		  error_msg: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
	}
	
	handleLogin = async (e) => {
		e.preventDefault();


		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
		this.setState({ login: true, email: '', password: '' });
		// alert(this.state.password);

		var insert_body = new URLSearchParams();
		insert_body.append('email', this.state.email);
		insert_body.append('password', this.state.password);

		await axios.post('https://admin-service87.herokuapp.com/login', insert_body, config)
		  .then((response) => {
			if (response.data._id)
			  this.setState({ user: response.data, login: true, email: '', password: '' });
			else
			  // alert(JSON.stringify(response.data));
			  this.setState({ error_msg: "Invalid id/password try again ..." })
		  })
		  .catch(function (error) {
			//alert(error);
		});
	}

	logoutHandler = () => {
		this.setState({
		  login: false,
		  user: false,
		  email: '',
		  password: ''
		})
	}
	
	render(){
		const { login, user, email, password, error_msg } = this.state
		
		if(login)
			return (<Router history={hist}>
						<Switch>
						  <Route path="/admin" component={Admin} />
						  <Route path="/rtl" component={RTL} />
						  <Redirect from="/" to="/admin/dashboard" />
						</Switch>
					  </Router>)
		
			const { classes } = this.props;
		return(
			<div>
			  <GridContainer justify="center">
				<GridItem xs={10} sm={10} md={5}>
				  <Card>
				  <form onSubmit={this.handleLogin}>
					<CardHeader color="primary">
					  <h4 className={classes.cardTitleWhite}>Login</h4>
					</CardHeader>
					<CardBody>
						<CustomInput
							labelText="Email Address"
							id="email"
							type="email"
							name="email"
							formControlProps={{
							  fullWidth: true
							}}
						  />
						  <CustomInput
							labelText="Password"
							id="password"
							name="password"
							type="password"
							formControlProps={{
							  fullWidth: true
							}}
						  />
					</CardBody>
					<CardFooter>
					  <Button color="primary" type="submit">Login</Button>
					  <Button style={{float:'right'}} color="warning">Forget Password</Button>
					</CardFooter>
					</form>
				   </Card>
				</GridItem>
			</GridContainer>
			</div>
		)
	}
}
Login.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Login);