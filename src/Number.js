import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import NumberFact from './NumberFact'


class Number extends Component {

state={
    faveNumber: '',
}

handleChange=(ev)=>{
    this.setState({faveNumber: ev.target.value})
}

handleSubmit = (ev) =>{
    ev.preventDefault()
    this.props.history.push(`/number/${this.state.faveNumber}`)
}

    render(){
        return(
            <div className="Number" >
            <h1>Number!</h1>

            <form onSubmit={this.handleSubmit}>
                <div>
                        <input type="text"
                        required autoFocus 
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.faveNumber} />
                    </div>

                    <div>
                            <button type="submit">
                            Find Out about your fave number

                            </button>
                        </div>

                        </form>

                    <Route path="/number/:faveNumber" 
                    component={NumberFact} />
            </div>
        )
    }
}

export default Number