import React, {Component} from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../errorboundry";
import './people-page.css'
import SwapiService from "../../services/swapi-service";
import Row from "../Row";


export default class PeoplePage extends Component {
	
	SwapiService = new SwapiService ();
	state = {
		selectedItem: 4,
		hasError: false
	};
	
	componentDidCatch(error, errorInfo) {
	
	}
	
	onPersonSelected = (id) => {
		this.setState ({
			selectedItem: id
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
		const personDetails = (<ItemDetails itemId={this.state.selectedItem}/>);
		return (
			<ErrorBoundry>
			<Row left={itemList} right={personDetails}/>
			</ErrorBoundry>
		);
	}
}