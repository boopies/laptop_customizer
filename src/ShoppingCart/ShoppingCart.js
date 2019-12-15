import React from 'react';
import ShoppingCartItems from './ShoppingCartItems/ShoppingCartItems'
import ShoppingCartTotal from './ShoppinCartTotal/ShoppingCartTotal'

class ShoppingCart extends React.Component {
    render() {
		const summary = Object.keys(this.props.selected).map((feature, idx) => {
	      const featureHash = feature + '-' + idx;
	      const selectedOption = this.props.selected[feature];

	      return (
	      	<ShoppingCartItems
	      		key={featureHash}
				featureHash={featureHash}
	      		feature={feature}
	      		name={selectedOption.name}
	      		cost={selectedOption.cost}
				usCurrency={this.props.usCurrency} />
	      );
	    });

		const total = Object.keys(this.props.selected).reduce(
	      (acc, curr) => acc + this.props.selected[curr].cost,
	      0
	    );
	    
        return (
            <div>
                <h2>Your cart</h2>
                {summary}
                <ShoppingCartTotal 
                  total={total}
                  usCurrency={this.props.usCurrency}
                />
            </div>
            )
        }
}

export default ShoppingCart;