import React, {Component} from 'react'

import './Github.css'


class Github extends Component {

state={
    username: '',
}

handleChange=(ev)=>{
    this.setState({username: ev.target.value})
}

    render(){
        return(
            <div className="Github" >
            <img
          src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
          alt="GitHub"
          className="logo"
        />
            <h1>Github!</h1>

            <form>
                <div>
                        <input type="text"
                        required autoFocus 
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.username} />
                    </div>

                    <div>
                            <button type="submit">
                            Look Up User

                            </button>
                        </div>

                        </form>


            </div>
        )
    }
}

export default Github