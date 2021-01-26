import React, {useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

function Nav ({history, dispatch}) {
    const path = history.location.pathname
    const selected = {color:'white'}
    const [logout, setLogout] = useState(false)
    const [home, setHome] = useState(false)
    const [newQuestion, setNewQuestion] = useState(false)
    const [leaderboard, setLeaderboard] = useState(false)

    const handleLogout = () => {
        console.log('handleLogout')
        dispatch(setAuthedUser(null))
    }

    return (
        <nav className='nav'>
            <ul className="menu">
                <li onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                    className={path === '/' || home?'trapazoid':''}>
                    <NavLink to='/' exact activeClassName='active' className="menu-tab" style={path === '/' || home ? selected : {}}>
                        Home
                    </NavLink>
                </li>
                <li onMouseEnter={() => setNewQuestion(true)}
                    onMouseLeave={() => setNewQuestion(false)}
                    className={path === '/question' || newQuestion?'trapazoid':''} >
                    <NavLink to='/question' activeClassName='active' className="menu-tab" style={path === "/question" || newQuestion ? selected : {}}>
                        New Question
                    </NavLink>
                </li>
                <li onMouseEnter={() => setLeaderboard(true)}
                    onMouseLeave={() => setLeaderboard(false)}
                    className={path === '/leaderboard' || leaderboard?'trapazoid':''} >
                    <NavLink to='/leaderboard' activeClassName='active' className="menu-tab" style={path === '/leaderboard' || leaderboard ? selected : {}}>
                        Leader Board
                    </NavLink>
                </li>
            </ul>
            <ul className="menu" style={{justifyContent:'flex-end', flexGrow:'1'}}>
                <li className=""></li>
                <li onMouseEnter={() => setLogout(true)}
                    onMouseLeave={() => setLogout(false)}
                    className={ logout ? 'trapazoid' : '' }>
                        <span className="menu-tab"
                            style={ logout ? selected : {}}
                            onClick={handleLogout}>
                                Logout
                        </span>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(connect()(Nav))