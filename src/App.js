import React from 'react';
import './App.css';
import Person from './Componnets/Person';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false,


    }
  }
  render(){
    return(
      <>
      <button onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}
      </button>
        
       
        
        
        {
          this.state.show &&   <Person/>
        }
  
       
        
  </>
    );
      
  }
}

export default App;
