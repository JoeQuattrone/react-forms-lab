import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageValue: "",
      remainingLength: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      messageValue: event.target.value,
      remainingLength: this.props.maxChars - event.target.value.length
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageValue} onChange={this.handleChange}/>
        <div>{this.state.remainingLength}</div>
      </div>
    );
  }
}

export default TwitterMessage;
