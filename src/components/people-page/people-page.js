import React, {Component} from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../errorboundry";
import './people-page.css'
import SwapiService from "../../services/swapi-service";
import Row from "../Row";


export default class PeoplePage extends Component {
	
	SwapiService = new SwapiService ();
	state = {
		selectedPerson: 4,
		hasError: false
	};
	
	componentDidCatch(error, errorInfo) {
	
	}
	
	onPersonSelected = (id) => {
		this.setState ({
			selectedPerson: id
		})
	};
	
	render() {
		
		if (this.state.hasError) {
			return <ErrorIndicator/>
		}
		const itemList = (<ItemList onItemSelected={this.onPersonSelected}
		                            getData={this.SwapiService.getAllPeople}>
				
				{(i) => (`${i.name} (${i.birthYear})`)}
			</ItemList>
		);
		const personDetails = (<PersonDetails personId={this.state.selectedPerson}/>);
		return (
			<ErrorBoundry>
			<Row left={itemList} right={personDetails}/>
			</ErrorBoundry>
		);
	}
}