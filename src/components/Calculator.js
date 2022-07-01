import React from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import "../stylesheets/calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: "",
      currentOperator: "",
      numberInMemory: "",
      resultNumber: "",
    };

    this.SetCurrentNumber = this.SetCurrentNumber.bind(this);
    this.SetOperator = this.SetOperator.bind(this);
    this.AllClear = this.AllClear.bind(this);
    this.Result = this.Result.bind(this);
  }

  AllClear() {
    this.setState({
      currentNumber: "",
    });

    this.setState({
      currentOperator: "",
    });

    this.setState({
      numberInMemory: "",
    });

    this.setState({
      resultNumber: "",
    });
  }

  Clear() {
    this.setState({
      currentNumber: "",
    });
  }

  SetCurrentNumber(clickedNumber) {
    if (this.state.currentNumber == "") {
      this.setState({
        currentNumber: clickedNumber,
      });
    } else {
      this.setState({
        currentNumber: this.state.currentNumber * 10 + clickedNumber,
      });
    }
  }

  SetOperator(clickedOperator) {
    if (this.state.currentNumber == "") {
      return;
    } else {
      this.setState({
        numberInMemory: this.state.currentNumber,
      });

      this.setState({
        currentOperator: clickedOperator,
      });

      this.Clear();
    }
  }

  Result() {
    if (this.state.numberInMemory == "" || this.state.currentNumber == "") {
      return;
    } else {
      if (this.state.currentOperator == "+") {
        this.setState(
          {
            resultNumber: this.state.numberInMemory + this.state.currentNumber,
          },
          () => {
            this.ResultRender();
          }
        );
      } else if (this.state.currentOperator == "-") {
        this.setState(
          {
            resultNumber: this.state.numberInMemory - this.state.currentNumber,
          },
          () => {
            this.ResultRender();
          }
        );
      } else if (this.state.currentOperator == "x") {
        this.setState(
          {
            resultNumber: this.state.numberInMemory * this.state.currentNumber,
          },
          () => {
            this.ResultRender();
          }
        );
      } else if (this.state.currentOperator == "/") {
        this.setState(
          {
            resultNumber: this.state.numberInMemory / this.state.currentNumber,
          },
          () => {
            this.ResultRender();
          }
        );
      }
    }
  }

  ResultRender() {
    this.setState({
      currentNumber: this.state.resultNumber,
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display currentNumber={this.state.currentNumber} />
        <Buttons
          SetCurrentNumber={this.SetCurrentNumber}
          SetOperator={this.SetOperator}
          AllClear={this.AllClear}
          Result={this.Result}
        />
      </div>
    );
  }
}

export default Calculator;
