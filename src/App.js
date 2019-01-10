import React, { Component } from 'react';
//import './App.scss';
//import('./static/data/products.json').then(json => ...)

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <GithubCorner />
      <main>
      <Filter />
      <Shelf />
      </main>
      <FloatCart />
      </React.Fragment>
      );
    }
  }

 
  class Filter extends Component {
  
    render() {
      return (
      <div className="filters">
      <h4 className="title">Sizes:</h4>
      </div>
      );
    }
  }


 

  class FloatCart extends Component{
    render(){
      return(
      <button className="square">
    </button>
      )
    }
  }

  class Shelf extends Component {
    render(){
      return (
      <div>
      <div className="header"> </div>
      </div>
      )
    }
  }

  class GithubCorner extends Component{
    render(){
      return(
      <button className="square">
    </button>
      )
    }
  }

  export default App;
