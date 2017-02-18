import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import ProfileDetails from '../components/Profile/ProfileDetails.jsx';


export class Home extends React.Component {
  contextTypes: {
    router: T.object,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: props.auth.getProfile(),
    };
    // listen to profile_updated events to update internal state
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({ profile: newProfile });
    });
  }

  logout() {
    this.props.auth.logout();
    this.context.router.push('/login');
  }

  render() {
    const { profile } = this.state;
    return (
      <div>
        <h2>Home</h2>
        <ProfileDetails profile={profile}></ProfileDetails>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    );
  }
}

Home.propTypes = {
  auth: T.instanceOf(AuthService),
};

export default Home;
