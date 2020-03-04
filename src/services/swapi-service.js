export default class SwapiService {
	_apiBase = 'https://swapi.co/api';
	way1=`/planets/`;
	way2=`/starships/`;
	way3=`/people/`;
	async getResource(url) {
		const res = await fetch (`${this._apiBase}${url}`);
		if ( !res.ok) {
			throw new Error (`Couldn't fetch ${url}` + `, received ${res.status}`);
		}
		else {
			return await res.json ();
		}
		
	}
	
	async getAllPeople() {
		const res = await this.getResource (`${this.way3}`);
		return res.results;
	}
	
	getPerson(id) {
		return this.getResource (`${this.way3}${id}/`)
	}
	
	async getAllPlanets() {
		const res = await this.getResource (`${this.way1}`);
		return res.results;
	}
	
	getPlanet(id) {
		return this.getResource (`${this.way3}${id}/`)
	}
	async	getAllStarships() {
		const res = await this.getResource(`${this.way2}`);
		return  res.results;
	}
	
	getStarship(id) {
		return this.getResource (`${this.way2}${id}`);
	}
	
}

const swapiService = new SwapiService ();
swapiService.getStarship (3).then ((person) => {
	console.log (person.name);
	
});