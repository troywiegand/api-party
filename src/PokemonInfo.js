import React, { Component } from 'react'


var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();



class PokemonInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {},
      pokemonInfo: {
          sprites: {}
      }
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
    P.getPokemonByName(pokemon).then((pokemonInfo)=>this.setState({pokemonInfo}, () => console.log(this.state.pokemonInfo["sprites"].front_default)))
  }
  

  render() {
    return (
      <div className="PokemonInfo">
      <h2>{this.state.pokemonInfo["name"]} </h2>
        <img
          src={ this.state.pokemonInfo["sprites"].front_default  }
          alt={this.state.pokemon}
        />
      </div>
    )
  }
}

export default PokemonInfo