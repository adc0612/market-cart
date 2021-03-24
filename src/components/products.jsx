import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
  handleIncrement = product => {
    // props로 app.jsx에 전달
    this.props.onIncrement(product);
  };

  handleDecrement = product => {
    this.props.onDecrement(product);
  };

  handleDelete = product => {
    this.props.onDelete(product);
  };

  render() {
    return (
      <ul>
        {this.props.products.map(product => (
          // Product의 컴포넌트에 product props로 전달
          <Product
            key={product.id}
            product={product}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Products;
