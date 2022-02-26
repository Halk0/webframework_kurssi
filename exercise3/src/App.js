import './App.css';
import products from './kauppatavarat.json';
import Productlist from './components/productlist';
import React from 'react';
import kasvi from './huone-kasvi.png';
import vasara from './vasara.png';
import Search from './components/search';
import vanha from './huono.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = products;
    for (var proppi = 0; proppi < this.state.items.length; proppi++) {
      if (this.state.items[proppi].key === 1)
        this.state.items[proppi].img = vasara
      else if (this.state.items[proppi].key === 2)
        this.state.items[proppi].img = kasvi
      else if (this.state.items[proppi].key === 3)
        this.state.items[proppi].img = vanha
    }
  };

  hae(formData) {
    formData.preventDefault();
    if (!formData.target.searchbar.value) {
      this.setState(products);
      return;
    }
    var new_state = { "items": [] }
    for (let indx = 0; indx < products.items.length; indx++) {
      if (products.items[indx].name.includes(formData.target.searchbar.value)) {
        console.log(products.items[indx].name);
        console.log('includeded')
        new_state.items.push(products.items[indx]);
      }
    }
    this.setState(new_state);
    return;
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Search Submit={(ev) => this.hae(ev)}></Search>
          <Productlist items={this.state.items} />
        </header>
      </div>
    );
  }
}

export default App;
