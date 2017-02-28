import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';
import Login from './Login.jsx';
import Header from './Header.jsx';
import ProfileDetails from '../components/Profile/ProfileDetails.jsx';
import PropertyCardContainer from './PropertyCardContainer.jsx';


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
  }

  logout() {
    this.props.auth.logout();
    this.context.router.push('/login');
  }

  render() {
    const { profile } = this.state;
    return (
      <div>
        <Header logout={this.logout.bind(this)}/>
        <PropertyCardContainer />
      </div>
    );
  }
}


export default Home;
