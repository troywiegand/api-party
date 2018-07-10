import React, { Component } from 'react'

class NumberFacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      faveNumber: ''
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.faveNumber !== this.props.match.params.faveNumber) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { faveNumber } = this.props.match.params
    console.log(fetch(`http://numbersapi.com/${faveNumber}/trivia?text`))
    fetch(`http://numbersapi.com/${faveNumber}/trivia?json`)
    .then(response => response.json())
    .then(faveNumber => this.setState({ faveNumber }))


  }

  render() {
    return (
      <div className="NumberFacts">
       <h3> {this.state.faveNumber.text} </h3>
      </div>
    )
  }
}

export default NumberFacts