import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import PokemonInfo from './PokemonInfo'


class Pokemon extends Component {

state={
    pokemon: '',
}

handleChange=(ev)=>{
    this.setState({pokemon: ev.target.value})
}

handleSubmit = (ev) =>{
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemon}`)
}

    render(){
        return(
            <div className="Github" >
            
            <h2>Pokemon</h2>

            <form onSubmit={this.handleSubmit}>
                <div>
                        <input type="text"
                        required autoFocus 
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.pokemon} />
                    </div>

                    <div>
                            <button type="submit">
                            Look Up Pokemon

                            </button>
                        </div>

                        </form>

                    <Route path="/pokemon/:pokemon" 
                    component={PokemonInfo} />
            </div>
        )
    }
}

export default Pokemon