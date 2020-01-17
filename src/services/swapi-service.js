
 export default class SwapiService {

    _apiBase =`http https://swapi.co/api`;

    async getResourse(url){
        const res=await fetch(`${this._apiBase}${url}`);
        if (!res.ok){

            throw new Error(`Couldn't fetch  ${url}` + `,received ${res.status}` )
        }
        return await  res.json();
    }

    async getAllPeople (){
        const res = await this.getResourse(`/people/`);
        return res.results;
    }
    getPerson (id){
        return this.getResourse(`/people/1/${id}`);
    }
    async getAllPlanets (){
        const res = await this.getResourse(`/planets/`);
        return res.results;
    }
    async getAllStarships (){
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }
    getPlanet(id){
        return this.getResourse(`/planets/${id}/`);
    }
    async getStarship(id){
        return this.getResourse(`/starships/${id}/`);
    }
}


const swapi = new SwapiService();
swapi.getAllPeople().then((people)=>{
    people.forEach((p)=>{
        console.log(p.name);
    })
});






