import React, { PropTypes as T } from 'react'

export class ProfileDetails extends React.Component {
  propTypes: {
    profile: T.object
  }

  render() {
    const { profile } = this.props
    return (
      <div>
          <h3>Welcome {profile.name}!</h3>
          <p>{profile.email}</p>
      </div>
    )
  }
}

export default ProfileDetails;
