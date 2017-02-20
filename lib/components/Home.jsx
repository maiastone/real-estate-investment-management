import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';
import Login from './Login.jsx';
import ProfileDetails from '../components/Profile/ProfileDetails.jsx';
import PropertyContainer from './PropertyContainer.jsx';


export class Home extends React.Component {
  static contextTypes = {
    router: T.object,
  }

  static propTypes = {
    auth: T.instanceOf(AuthService),
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: this.props.auth.getProfile(),
    };
    // listen to profile_updated events to update internal state
    // props.auth.on('profile_updated', (newProfile) => {
    //   this.setState({ profile: newProfile });
    // });
  }

  logout() {
    this.props.auth.logout();
    this.context.router.push('/login');
  }

  render() {
    const { profile } = this.state;
    return (
      <header className='header'>
        <h2 id='site-title'>Real Estate Dashboard</h2>
        <div className='profile-header'>
          <ProfileDetails profile={profile}></ProfileDetails>
          <button id='logout' onClick={this.logout.bind(this)}>Logout</button>
        </div>
        <PropertyContainer />
      </header>
    );
  }
}


export default Home;
