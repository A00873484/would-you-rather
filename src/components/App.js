import { Component, Fragment } from 'react'
import Nav from './Nav'
import Login from './Login'
import HomePage from './HomePage'
import PollPage from './PollPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

class App extends Component {

  componentDidMount(){
    this.props.handleInitialData()
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav/>
            {this.props.users === null
              ? null 
              : this.props.authedUser === null
              ? <Login/>
              : <div>
                  <Route path='/' exact component={HomePage}/>
                  <Route path='/leaderboard' exact component={LeaderBoard}/>
                  <Route path='/add' exact component={NewQuestion}/>
                  <Route path='/questions/:id' component={PollPage}/>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    users: Object.keys(users).length === 0 ? null : users,
    authedUser,
  }
}

export default connect(mapStateToProps, { handleInitialData })(App);
