import React from "react";

const CustomInput = (WarppedComponent) => {
  return class extends React.Component {
    constructor(props){
      super();
      this.state = {
        text: "",
      };
     
    }
    handleInput = (event) => {
      this.setState({ text: event.target.value });
    };

    render() {
      return (
        <div style={{
          border: "1px solid black",
          paddingLeft: "20px",
          marginLeft: "10px",
          width: "300px",
        }}>
          <h2>{this.props.name}</h2>
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
