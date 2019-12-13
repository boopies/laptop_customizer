import React from 'react';
import ShoppingListItem from './ShoppingListItem/ShoppingListItem'
import slugify from 'slugify';

class ShoppingListCategory extends React.Component{
    render() {
        const options = this.props.features[this.props.feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
            return (
                <ShoppingListItem
                    feature={this.props.feature} 
                    features={this.props.features}
                    selected={this.props.selected}
                    usCurrency={this.props.usCurrency}
                    handleFeatureUpdate={this.props.handleFeatureUpdate}
                    item={item}
                    itemHash={itemHash}
                />
            );
         });

        return(
            <fieldset className="feature" key={this.props.featureHash}>
              <legend className="feature__name">
                <h3>{this.props.feature}</h3>
              </legend>
              {options}
            </fieldset>
        )
    }

}

export default ShoppingListCategory;