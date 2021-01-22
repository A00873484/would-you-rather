import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveUsersAnswer } from '../actions/shared'
import { saveQuestionAnswer } from '../utils/api'

class NewQuestion extends Component {
    render(){
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
                    />

                    <div className="v-aligned-col padding">
                        <div className="break-line"></div>
                        <span className="center-text">Or</span>
                        <div className="break-line"></div>
                    </div>

                    <input placeholder="Enter Option One Text Here"
                        className="option-input"
                    />
                </div>
            </div>
        )
    }
}

export default NewQuestion