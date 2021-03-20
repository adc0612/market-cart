import React, { Component } from 'react';
import './app.css';
import Products from './components/products';

class App extends Component {
  state = {
    products: [
      { id: 1, name: 'Pringles', count: 0 },
      { id: 2, name: 'Haribo', count: 0 },
      { id: 3, name: 'Milka', count: 0 },
    ],
  };

  render() {
    return (
      <>
        <Products />
      </>
    );
  }
}

export default App;
