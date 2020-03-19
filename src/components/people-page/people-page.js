import React, {Component} from "react";

import './people-page.sass'
import ItemList from "../item-list";
import PersonDetails from "../details";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component{
	state={
	selectedPerson: 3,
		hasError:false
	};
	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError:true
		})
	}
	
	onPersonSelected = (id) => {
		this.setState ({
			selectedPerson: id
		});
	};
	
	render() {
		
		if (this.state.hasError){
			return <ErrorIndicator/>
		}
		return (
			<div>
				<p>People Page</p>
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onPersonSelected}/>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson}/>
					</div>
				</div>
			</div>
		);
	}
}