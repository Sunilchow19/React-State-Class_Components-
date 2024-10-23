import { Component } from "react";




class Counter extends Component{


    //With constructor defiining State
    constructor(){
        super()
        this.plus=this.plus.bind(this)
        this.minus=this.minus.bind(this)
        this.state={
            a:0
        }
    }

  //Without constructor defining State
//   state={
//     a:10
//   }

    plus(){
        this.setState({
            a:this.state.a+1
        })
    }

    minus(){
        this.setState({
            a:this.state.a-1
        })
    }

    render(){

        let counterStyle = {};
    if (this.state.a > 5) {
      counterStyle = { color: "red" };
    } else if (this.state.a < 0) {
      counterStyle = { color: "blue" };
    } else if (this.state.a==0) {
        counterStyle = { color: "orange" };
      }
      else if (this.state.a>15) {
        counterStyle = { color: "yellow" };
      }  
     else {
      counterStyle = { color: "green" };
    }


        return (
            <>


            
            <h1 style={counterStyle}>Counter</h1>

            <button onClick={this.minus} >-</button>
            <span style={counterStyle}>{this.state.a}</span>
            
            <button onClick={this.plus}>+</button>
        

            

            
            </>
        )
    }
}


export default Counter