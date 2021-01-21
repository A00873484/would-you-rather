import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                console.log(users)
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function saveUsersAnswer ({ answer, qid, authedUser }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        qid,
        answer,
        authedUser,
    }
}