import React from 'react';
import PropertyList from './PropertyList.jsx';
import PropertyDetailCard from './PropertyDetailCard.jsx';

export default class AllPropertyContainer extends React.Component {

  render() {
    return (
      <div>
        <PropertyList />
        <PropertyDetailCard />
      </div>
    );
  }
}
