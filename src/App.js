import React from 'react'
import './App.css';
import Pin from './Components/pin';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      display: false,
      list:[]
    };
  }

  handleSubmit = () => {
    const list1 = [...this.state.list]
    if(this.state.value != ""){
      list1.push(this.state.value)
    }
    this.setState({
      display:true,
      list:list1
    })
  }

  render() {
    console.log(this.state.list, "list")
    const isTrue = this.state.value === "12345";
    return (
      <div className="App">
       <h1>Pin Component</h1>
        <Pin
          length={4}
          isTrue={isTrue}
          onChange={(val) => this.setState({ value: val })}
        />
        <button style={{
              height: "56px",
              width: "150px",
              fontSize: "28px",
              color: "white",
              background: "grey",
              borderRadius: "5px"
        }} onClick={this.handleSubmit} >Submit</button>
        {
          (this.state.display && this.state.list.length > 0) ? <div> {
            (this.state.list).map(item => 
              <h1>{item}</h1>
            )
            }
            <button style={{
            height: "56px",
            width: "150px",
            fontSize: "28px",
            color: "white",
            background: "grey",
            borderRadius: "5px"
          }}
             onClick={() => this.setState({list:[], display: false})}>delete</button> </div> : <div></div>
        }
      </div>
    );
  }
}
