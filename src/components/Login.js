import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Select, { components } from 'react-select';

class Login extends Component {

    handleLogin = (e) => {
        this.props.dispatch(setAuthedUser(e.value))
    }

    render(){
        const { users } = this.props
        const options = Object.keys(users).map( (key)=>( {value:key, label:users[key].name} ) )
        console.log(options)
        return <div className="restrict">
                <div className="poll-head padding top-indent center-text">
                    <span className="bold">Welcome to the Would You Rather App!</span>
                    <div>Please sign in to continue</div>
                </div>
                <div className="body">
                    <Select options = {options}
                        onChange={this.handleLogin}
                    />
                </div>
        </div>
    }
}

function mapStateToProps ({ users }) {
    return {
      users,
    }
}

export default connect(mapStateToProps)(Login)