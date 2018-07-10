import React, { Component } from 'react'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class PokemonInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {},
      pokemonInfo: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { pokemon } = this.props.match.params
    P.getPokemonByName(pokemon).then((pokemonInfo)=>this.setState({pokemonInfo}))
    
  }

  render() {
    return (
      <div className="PokemonInfo">
        <p> { JSON.stringify(this.state.pokemonInfo.sprites) } </p>
          
      </div>
    )
  }
}

export default PokemonInfo