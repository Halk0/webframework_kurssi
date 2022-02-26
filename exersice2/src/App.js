import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import ShoppingButton from './components/ShoppingButton'
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props) {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  lisaa(pid, product) {
    var new_state = this.state
    console.log(pid);
    console.log(product);
    for (let item = 0; item < new_state.items.length; item++) {
      console.log(new_state.items[item].id)
      console.log(item)
      if (new_state.items[item].id == pid) {
        new_state.items[item].qty += Math.floor(Math.random() * 10)
        this.setState(new_state);
        console.log(this.state);
        return;
      }
    }
    new_state.items.push({ id: pid, value: product, qty: Math.floor(Math.random() * 10), unit: 'pcs' });
    this.setState(new_state);
    console.log(this.state);
    return;
  }

  render() {
    const { applicationDescription, applicationName } = this.props;
    return <div className={styles.shoppingList}>
      <Title
        applicationDescription={applicationDescription}
        applicationName={applicationName}
      />
      <ShoppingList items={this.state.items} />
      <ShoppingButton onClick={() => this.lisaa(5, 'carrot')} product='carrot' />
      <ShoppingButton onClick={() => this.lisaa(6, 'potatoe')} product='potatoe' />
      <ShoppingButton onClick={() => this.lisaa(7, 'watermelon')} product='watermelon' />
      <ShoppingButton onClick={() => this.lisaa(8, 'coconut')} product='coconut' />
    </div>
  }

}

export default App;
