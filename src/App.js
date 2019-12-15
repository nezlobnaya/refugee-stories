import React from 'react';
import { withRouter, Route, Link, Redirect } from 'react-router-dom'
import SubmitStory from './components/SubmitStory/SubmitStory'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/Register/Register'
import StoriesList from './components/StoriesList/StoriesList'
import PendingStories from './components/PendingStories/PendingStories'
import Admin from './components/Admin/Admin'
// import Connect from './components/Connect/Connect'
import Home from './components/Home/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { getToken } from './utils/api'
import './App.css';


function App() {
  const signedIn = getToken()

  const Logout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/login' />
  }

  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
          <nav>
            <Link to='/'>Home</Link>
            {!signedIn && <Link to='/register'>Register</Link>}
            {!signedIn && <Link to='/login'>Login</Link>}
            {!signedIn && <Link to='/admin'>Admin</Link>}
            {signedIn && <Link to='/submitstory'>Submit a Story</Link>}
            {signedIn && <Link to='/stories'>Stories</Link>}
            {signedIn && <Link to='/pending'>Pending</Link>}
            {/* {signedIn && <Link to='/connect'>Connect</Link>} */}
            {signedIn && <Link to='/logout'>Logout</Link>}
          </nav>

            <Route exact path='/' component={Home} />
            <Route exact path='/register' render={props => <Register {...props}/>} />
            <Route exact path='/login' render={props => <LoginForm {...props}/>} />
            <Route exact path='/stories' component={StoriesList} />
            <Route exact path='/admin' render={props => <Admin {...props} />} />
            <PrivateRoute exact path='/submitstory' component={SubmitStory} />
            <Route exact path='/pending' render={props => (
                <PendingStories {...props}  /> 
                )} />
            {/* <Route exact path='/connect' component={Connect} /> */}
            <PrivateRoute exact path='/logout' component={Logout} />
            {/* <Route exact path='/stories/:id' render={props => (
                <Story {...props} stories={stories} updateStories={setStories} />
              )} /> */}
      </section>
    </div>
  );
}

export default withRouter(App);
