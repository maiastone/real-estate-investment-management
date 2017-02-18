import React, { PropTypes as T } from 'react'

export class ProfileDetails extends React.Component {
  propTypes: {
    profile: T.object
  }

  render() {
    const { profile } = this.props
    return (
      <div>
          <img src='{profile.picture}' />
          <h3>Profile</h3>
          <p><strong>Name: </strong> {profile.name}</p>
          <p><strong>Email: </strong> {profile.email}</p>
          <p><strong>Created At: </strong> {profile.created_at}</p>
          <p><strong>Updated At: </strong> {profile.updated_at}</p>
      </div>
    )
  }
}

export default ProfileDetails;
