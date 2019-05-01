import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from './constants/Products';
import Catalogue from './components/Catalogue';

class App extends Component {
  constructor() {
    super();
    this.state = { products: [] }
  }

  componentDidMount() {
    this.setState({ products: Products });
  }

  render() {
    return <Catalogue products={this.state.products} />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
