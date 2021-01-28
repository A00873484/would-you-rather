import React, { Component } from 'react'
import PollLink from './PollLink'
import { connect } from 'react-redux'

class HomePage extends Component {

    state = {
        view1:true
    }

    changeTab(){
        this.setState({view1:!this.state.view1})
    }

    unanswered = () => {
        this.setState({view1:true})
    }

    answered = () => {
        this.setState({view1:false})
    }

    render(){
        const {answered, unanswered, sorted} = this.props
        const list = this.state.view1 ? unanswered : answered
        const selectedView = {background:'#dad7d7', color:'rgb(66, 165, 115)'}
        return (
            <div className="poll-list restrict">
                <div className="tabs">
                    <div className="tab left-indent padding" 
                        style={this.state.view1?selectedView:{}}
                        onClick={this.unanswered}>unanswered</div>
                    <div className="tab right-indent padding" 
                        style={this.state.view1?{}:selectedView}
                        onClick={this.answered}>answered</div>
                </div>
                <ul className="body">
                    {
                        sorted.map((key)=>{
                            if(list[key])
                                return <li key={list[key].id}><PollLink id={list[key].id}/></li>
                            return null
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }) {
    let answered = {}, unanswered = {}
    const { answers } = users[authedUser]

    Object.assign(unanswered, questions)
    Object.keys(answers).forEach((answer)=>{
        answered[answer] = questions[answer]
        delete unanswered[answer]  
    })

    const sorted = Object.keys(questions).sort((a, b)=>{
        return questions[b].timestamp - questions[a].timestamp
    })

    return {
        answered,
        unanswered,
        authedUser,
        sorted,
    }
}

export default connect(mapStateToProps)(HomePage)