import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveUsersAnswer } from '../actions/shared'
import { saveQuestionAnswer } from '../utils/api'
import AvatarSection from './AvatarSection'

class Poll extends Component {

    state = {
        option:0
    }

    submit = () => {
        const { authedUser, question } = this.props
        this.props.dispatch(saveUsersAnswer({
            answer: this.state.option === 1 ? "optionOne" : "optionTwo",
            qid: question.id,
            authedUser
        }))
        saveQuestionAnswer({
            authedUser, 
            qid: question.id,
            answer: this.state.option === 1 ? "optionOne" : "optionTwo" 
        })
    }

    render(){
        const { optionOne, optionTwo } = this.props.question
        const { name, avatarURL } = this.props.author
        console.log(this.props.question)
        console.log(this.props.author)
        return (
            <div className="poll">
                <div className="poll-head padding">{name}</div>
                <div className="poll-body">
                    <AvatarSection url={avatarURL} name={name}/>
                    <div className="poll-info">
                        <div className="bold big-text">Would you rather</div>
                        
                        <label for="male" className="padding">
                            <input type="radio" id="option1" name="option" value="option1" onClick={()=>this.setState({option:1})}/>
                            {optionOne.text}
                        </label><br/>

                        <label for="female" className="pad-without-top">
                            <input type="radio" id="option2" name="option" value="option2" onClick={()=>this.setState({option:2})}/>
                            {optionTwo.text}
                        </label><br/>
                        
                        <button className="green-button-fill" onClick={this.submit} disabled={this.state.option===0}>Submit</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {id}){
    const {author} = questions[id]
    console.log(questions[id])
    return {
        author:users[author],
        question:questions[id],
        authedUser,
    }
}

export default connect(mapStateToProps)(Poll)