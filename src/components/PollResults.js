import React, { Component } from 'react'
import { connect } from 'react-redux'
import AvatarSection from './AvatarSection'

function Result({votes, total, option, picked}){
    const box = picked ?{
        backgroundColor:"rgb(169, 245, 207)",
        border:"2px solid rgb(119, 189, 154)",
        margin:'10px',
    } : {
        backgroundColor:"#eeeeee",
        border:"2px solid #dad7d7",
        margin:'10px',
    }
    return (
        <div className='padding relative' style={box}>
            {
                picked && <div className="yellow-badge">
                    <span>Your Vote</span>
                </div>
            }
            <div style={picked?{color:'green'}:{}} className="bold padding">
                Would you rather {option}?
            </div>
            <div className="progress-bar">
                <div className="progress" style={{width:`calc(${((votes*100)/total)}% - 5px)`}}>
                    {(votes*100)/total}%
                </div>
            </div>
            <div className="centerFont">{`${votes} out of ${total} votes`}</div>
        </div>
    )
}

class PollResults extends Component {
    render(){
        const {name, avatarURL} = this.props.author
        const { optionOne, optionTwo } = this.props.question
        const totalvotes = optionOne.votes.length+optionTwo.votes.length
        console.log(optionOne)
        return (
            <div className="poll">
                <div className="poll-head padding bold">Asked by {name}</div>
                <div className="poll-body">
                    <AvatarSection url={avatarURL} name={name}/>
                    <div className="poll-info">
                        <div className="bold big-text">Results:</div>
                        <Result votes={optionOne.votes.length} 
                            total={totalvotes} 
                            option={optionOne.text} 
                            picked={this.props.picked==='optionOne'}
                        />
                        <Result votes={optionTwo.votes.length} 
                            total={totalvotes} 
                            option={optionTwo.text} 
                            picked={this.props.picked==='optionTwo'}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {id}){
    const {author} = questions[id]
    return {
        author:users[author],
        question:questions[id],
        picked:users[authedUser].answers[id],
    }
}

export default connect(mapStateToProps)(PollResults)