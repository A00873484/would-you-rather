import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function Nav ({history}) {
    const path = history.location.pathname
    const selected = {color:'white'}

    return (
        <nav className='nav'>
            <ul className="menu">
                <li className={path === '/'?'trapazoid':''}>
                    <NavLink to='/' exact activeClassName='active' className="menu-tab" style={path === '/' ? selected : {}}>
                        Home
                    </NavLink>
                </li>
                <li className={path === '/question'?'trapazoid':''} >
                    <NavLink to='/question' activeClassName='active' className="menu-tab" style={path === "/question" ? selected : {}}>
                        New Question
                    </NavLink>
                </li>
                <li className={path === '/leaderboard'?'trapazoid':''} >
                    <NavLink to='/leaderboard' activeClassName='active' className="menu-tab" style={path === '/leaderboard' ? selected : {}}>
                        Leader Board
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(Nav)