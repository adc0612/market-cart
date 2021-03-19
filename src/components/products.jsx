import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {
        products: [
            {id: 1, name: 'Pringles', count: 0},
            {id: 2, name: 'Haribo', count: 0},
            {id: 3, name: 'Milka', count: 0},
        ],
    };
    render() {
        return (
            <ul>
                {this.state.products.map(product => (
                    // Product의 컴포넌트에 product props로 전달
                    <Product key={product.id} product={product}></Product>
                ))}
            </ul>
        );
    }
}

export default Products;