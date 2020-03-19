import React, { Component } from 'react';

import './item-list.css';

import SwapiService from "../../services";
import Loader from "../loader";

export default class ItemList extends Component {
	 swapi = new SwapiService();
	state = {
		peopleList:null
	};
	
	componentDidMount() {
	this.swapi.getAllPeople()
		.then((peopleList)=>{this.setState({
			peopleList:peopleList
		})})
	}
	renderItems=(arr)=>{
		return arr.map(({id,name})=>{
			return(
			<li className='list-group-item'
			key ={id}
			onClick={()=>this.props.onItemSelected(id)}>
				{name}
			</li>
			)
		})
	};
	
	
	
	
	render() {
		const {peopleList}=this.state;
		if(!peopleList){
			return <Loader/>
		}
		const items=this.renderItems(peopleList);
		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}