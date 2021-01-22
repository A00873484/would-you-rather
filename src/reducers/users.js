import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER, SAVE_QUESTION } from '../actions/shared'

export default function users (state={}, action){
    switch (action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]:action.answer
                    }
                }
            }
        case SAVE_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.author]:{
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
        default:
            return state
    }
}