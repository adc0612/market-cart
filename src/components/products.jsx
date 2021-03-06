import React, { Component } from 'react';
import Product from './product';
import ProductAddFrom from './productAddForm';

class Products extends Component {
  // handleIncrement = product => {
  //   // props로 app.jsx에 전달
  //   this.props.onIncrement(product);
  // };

  // handleDecrement = product => {
  //   this.props.onDecrement(product);
  // };

  // handleDelete = product => {
  //   this.props.onDelete(product);
  // };

  render() {
    return (
      <>
        <ProductAddFrom onAdd={this.props.onAdd}></ProductAddFrom>
        <ul>
          {this.props.products.map(product => (
            // Product의 컴포넌트에 product props로 전달
            <Product
              key={product.id}
              product={product}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Products;
