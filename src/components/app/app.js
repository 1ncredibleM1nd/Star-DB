import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import './app.css';
import ItemDetails, {Record} from "../item-details/item-details";
import ErrorBoundry from "../errorboundry";
import Row from "../Row";

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
		const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.SwapiService;
		
		const personDetails = (
			<ItemDetails itemId={11}
			             getData={getPerson}
			             getImageUrl={getPersonImage}>
				<Record field="gender" label="Gender:"/>
				<Record field="eyeColor" label="Eye Color:"/>
			</ItemDetails>
		);
		const starshipDetails = (
			<ItemDetails itemId={5}
			             getData={getStarship}
			             getImageUrl={getStarshipImage}>
				<Record field="model" label="Model:"/>
				<Record field="length" label="Length:"/>
				<Record field="costInCredits" label="Cost:"/>
				
			</ItemDetails>
		);
		
		return (
			<ErrorBoundry>
				<div className="stardb-app">
					<Header/>
					<Row
						left={personDetails}
						right={starshipDetails}/>
				</div>
			</ErrorBoundry>
		
		);
	}
}