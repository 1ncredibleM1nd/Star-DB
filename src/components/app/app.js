import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import SwapiService from "../../services/swapi-service";

import ItemList from '../item-list';

import './app.css';
import PersonDetails from "../person-details";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {
	
	SwapiService = new SwapiService ();
	
	state = {
		showRandomPlanet: true,
		
	};
	
	toggleRandomPlanet = () => {
		this.setState ((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};
	onPersonSelected = (id) => {
		this.setState ({
			selectedPerson: id
		})
	};
	
	render() {
		
		const planet = this.state.showRandomPlanet ?
			<RandomPlanet/> :
			null;
		
		return (
			<div className="stardb-app">
				<Header/>
				{planet}
				<button className="toggle-planet btn btn-warning btn-lg mb-4"
				        onClick={this.toggleRandomPlanet}>Toogle
					Random
				</button>
				<PeoplePage/>
				
			</div>
		
		);
	}
}