import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import "./Home.css"
//import LinearGradient from 'react-native-linear-gradient'. 
class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div style={{background: "#87ceeb"}} className="container">
				<div style={{fontSize: "14px", background: "#FFA62F", width: "10%", textAlign: "center", margin: "auto", marginBottom: "10px"}}>
					 
					<IconButton style={{color: "black"}} onClick={() => window.location.href="https://www.myntra.com/"}>
						< img src={"/myntra.png"} style={{width: 200, height: 200}} />
					</IconButton>
				</div>
				
				<div>
					<h1 style={{ fontSize: "45px" }}>Collaborative Shopping</h1>
					<p style={{ fontWeight: "200" }}>We are here to give you real shoping experience virtually ~MYNTRA</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}></p>
					{/* <Input placeholder="URL" onChange={e => this.handleChange(e)} /> */}
					<Button variant="contained" color="#FF8C00" onClick={this.join} style={{ margin: "20px"}}>Join the Room</Button>
				</div>
			</div>
		)
	}
}

export default Home;