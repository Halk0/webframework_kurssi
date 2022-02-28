import './App.css';
import React from 'react';
import ProductList from './components/productList';
import NewProduct from './components/newProduct';
import Search from './components/Search';
import { Buffer } from 'buffer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.authorizationH = 'Basic ' + Buffer.from('adm:adm', 'base64');
    this.state.products = [];
    this.state.invoices = [];
    this.state.admin = false;
    this.state.add = false;
    console.log(JSON.stringify(this.state));
  };

  hae(formData) {
    formData.preventDefault();
    if (!formData.target.searchbar.value) {
      this.getProductData();
    } else {
      this.searchProductData(formData.target.searchbar.value);
    }
  }

  searchProductData(searchVal) {
    var conf = { 'Authorization': this.state.authorizationH, 'headers': { 'search': searchVal } }
    fetch('http://localhost:3001/search', conf).then(
      response => response.json()).then(
        (data) => {
          console.log(data);
          this.setState({ products: data });
        }
      ).catch((err) => {
        console.log(err);
      });
  }

  getProductData() {
    fetch('http://localhost:3001/products', { 'Authorization': this.state.authorizationH }).then(
      response => response.json()).then(
        (data) => {
          console.log(data);
          this.setState({ products: data });
        }
      ).catch((err) => {
        console.log(err);
      });
  }

  addNew(formData) {
    formData.preventDefault();
    if (!formData.target.stock.value) {
      this.setState({ add: false })
    } else {
      var newProd = {
        'name': formData.target.name.value,
        'manufacturer': formData.target.manufacturer.value,
        'description': formData.target.description.value,
        'image': formData.target.image.value,
        'price': formData.target.price.value,
        'stock': formData.target.stock.value,
        'category': ["newly_added"],
        'productNumber': Math.floor(Math.random() * 10)
      }
      console.log(newProd);
      fetch('http://localhost:3001/newproduct', {
        'Authorization': this.state.authorizationH, 'method': 'POST', 'body': JSON.stringify(newProd), 'headers': { 'Content-Type': 'application/json' }
      }).then(
        response => response).then(
          (data) => {
            console.log(data);
            this.setState({ add: false });
          }
        ).catch((err) => {
          console.log(err);
        })
    }
  }

  poista(id) {
    fetch('http://localhost:3001/delproduct', {
      'Authorization': this.state.authorizationH, 'method': 'POST', 'headers': {
        'productNumber': id
      }
    }).then(
      response => response).then(
        (data) => {
          console.log(id)
          console.log(data);
          this.setState({ admin: false });
        }
      ).catch((err) => {
        console.log(err);
      })
  }

  getInvoiceData() {
    fetch('http://localhost:3001/products', { 'Authorization': this.state.authorizationH, 'headers': { UserId: 0 } }).then(
      response => response.json()).then(
        (data) => {
          console.log(data);
          this.setState({ invoices: data });
        }
      ).catch((err) => {
        console.log(err);
      });
  }

  toggleAdd() {
    if (!this.state.add)
      this.setState({ add: true })
  }

  toggleAdmin() {
    if (this.state.admin)
      this.setState({ admin: false })
    else if (!this.state.admin)
      this.setState({ admin: true })
  }

  async componentDidMount() {
    this.getProductData();
    this.getInvoiceData();
  }

  render() {
    console.log('renedered');
    console.log(JSON.stringify(this.state));
    if (this.state.admin && this.state.add) {
      return (
        <div className="App" >
          <header className="App-header">
            <Search Submit={(ev) => this.hae(ev)}></Search>
            <ProductList items={this.state.products} adm={true} Kliks={(ev) => this.poista(ev)} />
            <NewProduct Submit={(ev) => this.addNew(ev)} />
            <button onClick={() => this.toggleAdmin()}>Exit admin mode</button>
          </header>
        </div>
      )
    }
    else if (this.state.admin) {
      return (
        <div className="App" >
          <header className="App-header">
            <Search Submit={(ev) => this.hae(ev)}></Search>
            <ProductList items={this.state.products} adm={true} onClick={(id) => this.poista(id)} />
            <button onClick={() => this.toggleAdd()}>AddProduct</button>
            <button onClick={() => this.toggleAdmin()}>Exit admin mode</button>
          </header>
        </div>)
    } else
      return (
        <div className="App" >
          <header className="App-header">
            <Search Submit={(ev) => this.hae(ev)}></Search>
            <ProductList items={this.state.products} />
            <button onClick={() => this.toggleAdmin()}>Enter admin mode</button>
          </header>
        </div>
      );
  }
}

export default App;

