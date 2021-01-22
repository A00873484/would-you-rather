import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { saveUsersQuestion } from '../actions/shared'
import { saveQuestion } from '../utils/api'

class NewQuestion extends Component {

    state = {
        option1:"",
        option2:"",
        toHome: false,
    }

    submit = () => {
        const { option1, option2 } = this.state
        const { dispatch, authedUser } = this.props
        saveQuestion({ optionOneText:option1, optionTwoText:option2, author:authedUser }).then((question) => {
            dispatch(saveUsersQuestion(question))
            this.setState({option1:"", option2:"", toHome: true})
        })
    }

    render(){
        if(this.state.toHome)
            return <Redirect to='/'/>

        return (
            <div className="restrict">
                <div className="text-big bold padding top-indent center-text blank-box">
                    Create New Question
                </div>
                
                <div className="body padding">
                    Complete the question:
                    <h3>Would you rather ...</h3>
                    
                    <input placeholder="Enter Option One Text Here"
                        className="option-input"
                        value={this.state.option1}
                        onChange={(e)=>this.setState({option1:e.target.value})}
                    />

                    <div className="v-aligned-col padding">
                        <div className="break-line"></div>
                        <span className="center-text">Or</span>
                        <div className="break-line"></div>
                    </div>

                    <input placeholder="Enter Option One Text Here"
                        className="option-input"
                        value={this.state.option2}
                        onChange={(e)=>this.setState({option2:e.target.value})}
                    />
                    <div className="padding"></div>
                    <button className="green-button-fill" onClick={this.submit} disabled={!this.state.option1||!this.state.option2}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
      authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)