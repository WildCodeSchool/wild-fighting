import React from 'react';
import axios from 'axios';
let posts=[]
class TestApi extends React.Component {
    TestApi(){
        //const pokemonId = 1;
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res => {
            const posts = res.data.results.map(obj => ({name:obj.name, url:obj.url}))
            console.log(posts)
        })
        
        
    }
    render () {
        return (
            
        <div><div id="pokemon">{posts}</div>{this.TestApi()}</div>
        )};
}




/*class TestApi extends React.Component {
    TestApi() {
        const pokemonId = 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    /*.then(function(response) {
        return response.data;
    })
    .then(pokemon => document.querySelector('#pokemon').innerHTML = `<p><strong>${pokemon.name}</strong></p><img src="${pokemon.sprites.front_shiny}" />`)}

    .then(res => {
        const posts= res.data.results.map(obj =>({name:obj.name, url:obj.url }));
        this.setState({posts});
    })
        render () {
            return (
            <div><div id="pokemon"></div>{this.TestApi()}<button type="button" onClick = {() => this.TestApi()}>Get quotes</button></div>
            );
            
        }
    }   
}
*/

export default TestApi;