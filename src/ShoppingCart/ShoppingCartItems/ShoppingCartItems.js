import React from 'react';

class ShoppingCartItems extends React.Component{
	render() {
		return(
			<div className="summary__option" key={this.props.featureHash}>
	          <div className="summary__option__label">{this.props.feature} </div>
	          <div className="summary__option__value">{this.props.name}</div>
	          <div className="summary__option__cost">
	            {this.props.usCurrency.format(this.props.cost)}
	          </div>
	        </div>
		)
	}
}

export default ShoppingCartItems;