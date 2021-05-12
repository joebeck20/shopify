import React from 'react'
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

function Filter(props) {
  return !props.filteredProducts ? (
    <div>Loading...</div>
  ) : (
    <div className="filter">
        <div className="filter-result">
         {props.filteredProducts.length}Products
        </div>
        <div className="filter-sort">
          Order{" "}
          <select value={props.sort}
                  onChange={(e) =>
                    props.sortProducts(
                      props.filteredProducts,
                      e.target.value
                    )
                  }  
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select
            value={props.size}
            onChange={(e) =>
              props.filterProducts(props.products, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="Furniture">Furniture</option>
            <option value="Essentials">Essentials</option>
            <option value="Snack">Snack</option>
            <option value="Clothing">Clothing</option>
            <option value="Edibles">Edibles</option>
          </select>
        </div>
      </div>
    );
        
}

export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);