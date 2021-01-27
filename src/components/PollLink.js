import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AvatarSection from './AvatarSection'

class PollLink extends Component {

    viewPoll = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${id}`)
    }

    render(){
        const {name, avatarURL} = this.props.author
        return (
            <div className="poll">
                <div className="poll-head padding">{name}</div>
                <div className="poll-body">
                    <AvatarSection url={avatarURL} name={name}/>
                    <div className="poll-info vertical-center" style={{alignItems:'baseline'}}>
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
    return {
        author:users[author],
        optionSummary:`...${questions[id].optionOne.text.substring(0, 15)}...`,
        id
    }
}

export default withRouter(connect(mapStateToProps)(PollLink))