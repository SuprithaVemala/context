import React from "react";

const CustomInput = (WarppedComponent) => {
  return class extends React.Component {
    state = {
      text: "",
    };

    handleInput = (event) => {
      this.setState({ text: event.target.value });
    };

    render() {
      return (
        <div>
          <input
            placeholder="I am from HOC"
            type="text"
            onChange={this.handleInput}
            value={this.state.text}
          ></input>
          <WarppedComponent inputText={this.state.text}></WarppedComponent>
        </div>
      );
    }
  };
};


export default CustomInput;
