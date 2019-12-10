import React from 'react';
import ShoppingCartItems from './ShoppingCartItems/ShoppingCartItems'

class ShoppingCart extends React.Component {
    render() {
		const summary = Object.keys(this.props.selected).map((feature, idx) => {
	      const featureHash = feature + '-' + idx;
	      const selectedOption = this.props.selected[feature];

	      return (
	      	<ShoppingCartItems
	      		featureHash={featureHash}
	      		feature={feature}
	      		name={selectedOption.name}
	      		usCurrency={this.props.usCurrency}
	      		cost={selectedOption.cost} />
	      );
	    });

		const total = Object.keys(this.props.selected).reduce(
	      (acc, curr) => acc + this.props.selected[curr].cost,
	      0
	    );
	    
		return(
			<section className="main__summary">
	            <h2>Your cart</h2>
	            {summary}
	            <div className="summary__total">
	              <div className="summary__total__label">Total</div>
	              <div className="summary__total__value">
	                {this.props.usCurrency.format(total)}
	              </div>
	            </div>
	        </section>
		)
    }
}

export default ShoppingCart;