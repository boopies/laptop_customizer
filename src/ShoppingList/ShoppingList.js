import React from 'react';
import ShoppingListCategory from './ShoppingListCategory/ShoppingListCategory'
import '../index'

class ShoppingList extends React.Component{
    render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
	    const featureHash = feature + '-' + idx;

	      return (
	      	<ShoppingListCategory
	      		featureHash={featureHash} 
	      		feature={feature} 
	      		features={this.props.features}
	      		selected={this.props.selected}
	      		usCurrency={this.props.usCurrency}
	      		handleFeatureUpdate={this.props.handleFeatureUpdate} />
	      );
	    });
		
		return (
	    	<form className="main__form">
	            <h2>Customize your laptop</h2>
	            {features}
	        </form>
	    )
	}
}

export default ShoppingList;