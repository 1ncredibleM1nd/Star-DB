import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import SwapiService from "../../services/swapi-service";

import ItemList from '../item-list';

import './app.css';
import PersonDetails from "../person-details";

export default class App extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        showRandomPlanet: true,
        selectedPerson:null
    };
    
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };
    onPersonSelected=(id)=>{
     this.setState({
         selectedPerson:id
     })
    };
    
    
    render() {
        
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;
      
        return (
       
                <div className="stardb-app">
                    <Header />
                    {planet}
                <button className="toggle-planet btn btn-warning btn-lg mb-4" onClick={this.toggleRandomPlanet}>Toogle Random</button>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <ItemList onItemSelected={this.onPersonSelected}/>
                        </div>
                        <div  className="col-md-6">
                            <PersonDetails personId={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>
                
          
        );
    }
}