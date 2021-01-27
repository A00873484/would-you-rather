import React, { Component } from 'react'
import { connect } from 'react-redux'
import AvatarSection from './AvatarSection'
import Poll from './Poll'

class LeaderBoard extends Component {
    render(){
        const { users } = this.props
        
        const sorted = Object.keys(users).sort((key1, key2) => {
            const points1 = users[key1].questions.length + Object.keys(users[key1].answers).length
            const points2 = users[key2].questions.length + Object.keys(users[key2].answers).length
            return points2 - points1;
        })

        return (
            <div className="restrict">
                <ul>
                    {
                        sorted.map((key, index)=>{
                            const {id, avatarURL, name, answers, questions} = users[key]
                            return <li key={ id } style={{border:'1px solid #dad7d7', padding:'0px', margin:'10px'}}>
                                {
                                    index < 3 && <div className="contain-absolute">
                                        <div className="corner-tab"></div>
                                        <img className="corner-image" src={`../trophy${index+1}.png`}/>
                                    </div>

                                }
                                <div className="poll-body">
                                    
                                    <AvatarSection url={avatarURL} name={name}/>

                                    <div className="poll-info">
                                        <div className="bold padding">{name}</div>
                                        <div className="padding" style={{display:'flex'}}><span>Answered questions</span><span className="text-align-right" style={{flexGrow: 1}}>{Object.keys(answers).length}</span></div>
                                        <div className="padding" style={{display:'flex'}}><span>Created questions</span><span className="text-align-right" style={{flexGrow: 1}}>{questions.length}</span></div>
                                    </div>
                                    
                                    <div className='vertical-center'>
                                        <div className="result-container">
                                            <div className="poll-head padding">Score</div>
                                            <div className="body">
                                                <div className="padding vertical-center">
                                                    <div className="green-score">
                                                        {questions.length + Object.keys(answers).length}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoard)