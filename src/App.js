import React from "react"
import { Input } from "./components/Input";

class App extends React.Component {
  state = {
    status: false,
    value: '',
  };

  handleBoxEnter = () => {
    this.setState({ status: true });
  };

  handleBoxLeave = () => {
    this.setState({ status: false });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }


  handleKeyPress = event => {
    if (this.state.status) {
      if (event.key === "Enter") {
        const enter = document.querySelector(".enter")
        return enter.innerHTML = this.state.value
      } else if ((event.key === "Backspace") || (event.key === "Delete")) {
        const str = this.state.value;
        return this.setState({ value: str.substring(0, str.length - 1)});
      } else {
        const str = this.state.value + event.key;
        return this.setState({ value: str });
      }
    }
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleBoxEnter}
        onMouseLeave={this.handleBoxLeave}
        
      >
        <Input
          text={this.state}
        />
        <div className="enter" />
      </div>
    );
  }
}

export default App;
