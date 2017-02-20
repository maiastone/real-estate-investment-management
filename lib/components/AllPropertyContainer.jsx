import React from 'react';
import PropertyList from './PropertyList.jsx';
import Header from './Header.jsx';
import PropertyDetailCard from './PropertyDetailCard.jsx';

export default class AllPropertyContainer extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className='detail-view'>
          <PropertyList />
          <PropertyDetailCard />
        </div>
      </div>
    );
  }
}
