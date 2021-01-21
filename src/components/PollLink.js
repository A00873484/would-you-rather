import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class PollLink extends Component {

    viewPoll = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/poll/${id}`)
    }

    render(){
        const {name, avatarURL} = this.props.author
        return (
            <div className="poll">
                <div className="poll-head padding">{name}</div>
                <div className="poll-body">
                    <div className='vertical-center'>
                        <div className="avatar-container">
                            <img 
                                src={avatarURL}
                                alt={`Avatar of ${name}`}
                                className="avatar"
                            />
                        </div>
                    </div>
                    <div className="poll-info">
                        <div className="bold">Would you rather</div>
                        
                        <div className="padding">{this.props.optionSummary}</div>
                        
                        <button className="green-button-clear" onClick={(e)=>this.viewPoll(e, this.props.id)}>View Poll</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({users, questions}, {id}){
    const {author} = questions[id]
    console.log(questions[id])
    return {
        author:users[author],
        optionSummary:`...${questions[id].optionOne.text.substring(0, 15)}...`,
        id
    }
}

export default withRouter(connect(mapStateToProps)(PollLink))