import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Little Star Pizza',
  address: '1010 Divisadero',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94117',
  category: 'Deep Dish',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];
class App extends React.Component {
    render(){
    return(
        <div className="App">
  <h1>nibble</h1>
  <SearchBar />
  <BusinessList businesses={businesses} /> 
</div>
    );
}
}

export default App;
