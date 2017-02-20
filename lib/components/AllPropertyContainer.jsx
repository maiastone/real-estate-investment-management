import React from 'react';
import PropertyList from './PropertyList.jsx';
import PropertyDetailCard from './PropertyDetailCard.jsx';

export default class AllPropertyContainer extends React.Component {

  render() {
    return (
      <div>
        <h2 id='site-title'>Real Estate Dashboard</h2>
        <div className='detail-view'>
          <PropertyList />
          <PropertyDetailCard />
        </div>
      </div>
    );
  }
}
