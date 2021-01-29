import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollResults from './PollResults'
import Poll from './Poll'

function PollPage() {
    const { answered, id } = this.props
    return (
        <div className="restrict">
            {
                answered
                ? <PollResults id={id}/>
                : <Poll id={id}/>
            }
        </div>
    )

}

function mapStateToProps({users, authedUser}, props ){
    const { id } = props.match.params
    return {
        answered:users[authedUser].answers[id],
        id,
    }
}

export default connect(mapStateToProps)(PollPage)