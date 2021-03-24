import React, { Component } from 'react';

class ProductAddForm extends Component {
  formRef = React.createRef();
  // input value를 ref로 inputRef에 연결한다.
  inputRef = React.createRef();

  onSubmit = event => {
    // submit기능이 브라우져내에서는 refresh기능도 따라오기때문에 안되게 한다.
    event.preventDefault();
    // inputRef에 value가 있는것이 아니라 inputRef.current.value에 값이 있다.
    const name = this.inputRef.current.value;
    // name안에 값이 있으면 onAdd props로 값을 내린다.
    name && this.props.onAdd(name);
    // submit 후 reset하려면 아래 두가지로 사용해도 된다.
    // this.inputRef.current.value = '';
    this.formRef.current.reset(); //이게 정석
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Please enter the product"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default ProductAddForm;
