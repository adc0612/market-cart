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
    handleIncrement = product => {
        // state 오브젝트 안에있는 count를 증가 한 뒤 state를 업데이트 해야 함
        // state를 업데이트 했을 때는 바로 state에 값을 넣거나 연산을 하면 안됨
        // this.state.count += 1;
        // this.setState를 이용해서 꼭 state를 변경해야한다.
        // this.setState({count: product.count + 1});
        // '...'spreadOperator를 이용해 배열을 새배열에 복사한다.
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].count++;
        // 새배열을 수정시킨 다음 setState로 state의 배열을 덮어 씌운다.
        // this.setState({products: products});
        // 아래는 위와 같이 key와 value가 같으면 생략이 가능하다.
        this.setState({products});
    };
    handleDecrement = product => {
        // const count = product.count - 1;
        // count에 state의 count값을 집어넣고 만약 0이면 더이상 감소되지않고 0으로 셋팅하고 아니면 감소시켜준다.
        // this.setState({count: count < 0 ? 0 : count});
        // '...'spreadOperator를 이용해 배열을 새배열에 복사한다.
        const products = [...this.state.products];
        const index = products.indexOf(product);
        const count = products[index].count - 1;
        products[index].count = count < 0 ? 0 : count;
        // 새배열을 수정시킨 다음 setState로 state의 배열을 덮어 씌운다.
        this.setState({products});
    };
    handleDelete = product => {
        // filter를 이용해 들어온 product id와 다른 것들을 다시 새배열로 만들어 setState에 전달한다.
        const products = this.state.products.filter(item => item.id !== product.id);
        this.setState({products})
        
    };
    render() {
        return (
            <ul>
                {this.state.products.map(product => (
                    // Product의 컴포넌트에 product props로 전달
                    <Product 
                    key={product.id} 
                    product={product} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handleDelete}></Product>
                ))}
            </ul>
        );
    }
}

export default Products;