import React, {useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

function Nav ({history, dispatch, user}) {
    const path = history.location.pathname
    const selected = {color:'white'}
    const [logout, setLogout] = useState(false)
    const [home, setHome] = useState(false)
    const [newQuestion, setNewQuestion] = useState(false)
    const [leaderboard, setLeaderboard] = useState(false)

    const handleLogout = () => {
        dispatch(setAuthedUser(null))
    }

    console.log(user)

    return (
        <nav className='nav'>
            <ul className="menu">
                <li onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                    className={'vertical-center '+(path === '/' || home?'trapazoid':'')}>
                    <NavLink to='/' exact activeClassName='active' className="menu-tab" style={path === '/' || home ? selected : {}}>
                        Home
                    </NavLink>
                </li>
                <li onMouseEnter={() => setNewQuestion(true)}
                    onMouseLeave={() => setNewQuestion(false)}
                    className={'vertical-center '+(path === '/question' || newQuestion?'trapazoid':'')} >
                    <NavLink to='/question' activeClassName='active' className="menu-tab" style={path === "/question" || newQuestion ? selected : {}}>
                        New Question
                    </NavLink>
                </li>
                <li onMouseEnter={() => setLeaderboard(true)}
                    onMouseLeave={() => setLeaderboard(false)}
                    className={'vertical-center '+(path === '/leaderboard' || leaderboard?'trapazoid':'')} >
                    <NavLink to='/leaderboard' activeClassName='active' className="menu-tab" style={path === '/leaderboard' || leaderboard ? selected : {}}>
                        Leader Board
                    </NavLink>
                </li>
            </ul>
            {
                user && <ul className="menu" style={{justifyContent:'flex-end', flexGrow:'1'}}>
                    <li className='vertical-center'>Hello, {user.name}</li>
                    <li className='vertical-center'><img src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className="mini-avatar"/></li>
                    <li onMouseEnter={() => setLogout(true)}
                        onMouseLeave={() => setLogout(false)}
                        className={ 'vertical-center '+ (logout ? 'trapazoid' : '') }>
                            <span className="menu-tab"
                                style={ logout ? selected : {}}
                                onClick={handleLogout}>
                                    Logout
                            </span>
                    </li>
                </ul>
            }
        </nav>
    )
}

function mapStateToProps ({ authedUser, users }) {
    return {
      user : users[authedUser]
    }
}

export default withRouter(connect(mapStateToProps)(Nav))