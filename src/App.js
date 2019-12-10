import React from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart/ShoppingCart'
import ShoppingList from './ShoppingList/ShoppingList'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends React.Component {
state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };

    updateFeature = (feature, newValue) => {
      const selected = Object.assign({}, this.state.selected);
      selected[feature] = newValue;
      this.setState({
        selected
      });
    };
  

  render() {
    return (
      <>
        <header>
          <h1>
            ELF Computing| Laptops
          </h1>
        </header>
      <main className="App">
      <ShoppingList
            features={this.props.features} 
            handleFeatureUpdate={(feature, newValue) => this.updateFeature(feature, newValue)}
            selected={this.state.selected}
            usCurrency={USCurrencyFormat} />
        <ShoppingCart 
            features={this.props.features}
            selected={this.state.selected}
            usCurrency={USCurrencyFormat}
                  />
 </main>
      </>
    );
  }
}

export default App;
