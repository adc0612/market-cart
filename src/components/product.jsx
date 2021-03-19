import React, { Component } from 'react';

class Product extends Component {
    state = {
        count: 0,
    };
    handleIncrement = () => {
        // state 오브젝트 안에있는 count를 증가 한 뒤 state를 업데이트 해야 함
        // state를 업데이트 했을 때는 바로 state에 값을 넣거나 연산을 하면 안됨
        // this.state.count += 1;
        // this.setState를 이용해서 꼭 state를 변경해야한다.
        this.setState({count: this.state.count + 1});
    };
    handleDecrement = () => {
        const count = this.state.count - 1;
        // count에 state의 count값을 집어넣고 만약 0이면 더이상 감소되지않고 0으로 셋팅하고 아니면 감소시켜준다.
        this.setState({count: count < 0 ? 0 : count});
    }
    render() {
        const {name, count} = this.props.product;
        return (
            <li className="product">
                <span className="product-name">{name}</span>
                <span className="product-count">{count}</span>
                <button className="product-button product-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="product-button product-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="product-button product-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Product;