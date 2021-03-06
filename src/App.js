import React, { Component } from 'react'
import Video from './Video'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/:url" component={Video} />
						<Route path="/" exact component={Home} />
						
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;