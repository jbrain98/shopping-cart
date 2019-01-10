import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
class Checkbox extends Component {
  render() {
    const { label, classes } = this.props;

    return (
      <div className={classes}>
        <label>
          <input
            type="checkbox"
            value={label}
          />

          <span className="checkmark">{label}</span>
        </label>
      </div>
    );
  }
}
class Filter extends Component {
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };
  createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      key={label}
    />
  );

  createCheckboxes = () => availableSizes.map(this.createCheckbox);
  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes:</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}




class FloatCart extends Component {
  render() {
    return (
      <button className="square">
      </button>
    )
  }
}

class Shelf extends Component {
  render() {
    return (
      <div>
        <div className="header"> </div>
      </div>
    )
  }
}

class GithubCorner extends Component {
  render() {
    return (
      <button className="square">
      </button>
    )
  }
}

export default App;
