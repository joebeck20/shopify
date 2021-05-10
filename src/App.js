import React from "react";
import data from "./data.json";

//importing comps
import Products from "./components/Products";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products : data.products,
      size: "",
      sort: "",
      
    };
  }

  render(){
    return (
      <div classname="grid-container">
              <header>
                 <a href="/" >React shopping cart</a>
              </header>
              <main>
                <div className="content">
                  <div className="main">
                     <Products products={this.state.products}></Products>
                  </div>
                  <div className="sidebar">
                    cart items
                  </div>
                </div>              
              </main>
           
      </div>  
    );

  }
 
}

export default App;
