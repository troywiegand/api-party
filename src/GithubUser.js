import React, {Component} from 'react'


class GithubUser extends Component {


    render(){
        return(
            <div className="GithubUser" >
           {`Oh Hi there, ${this.props.match.params.username}`}
            </div>
        )
    }
}

export default GithubUser