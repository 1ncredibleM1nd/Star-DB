import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from "../details";
import Loader from "../loader/loader";

import './app.css';
import PeoplePage from "../people-page/people-page";

export default class App extends Component {
	
	state = {
		showRandomPlanet: true,
		hasError:false
	};
	onPersonSelected = (id) => {
		this.setState ({
			selectedPerson: id
		});
	};
	
	render() {
		return (
			<div>
				<Header/>
				<RandomPlanet/>
				
				<PeoplePage/>
				<PeoplePage/>
				<PeoplePage/>
			
			</div>
		)
	}
};



