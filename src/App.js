import React from "react";
import { CartButton, CartWrapper, CartListing } from "./components/index"

function App() {

  const products = [
    { id: 1, name: 'Stove', price: 6000, description: "Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster" },
    { id: 2, name: 'Cooker', price: 12000, description: "Amazing product for cooking faster" },
  ]

  const continueToCheckout = (continueToCheckoutData) => {
    console.log("continueToCheckoutData", continueToCheckoutData)
  }

  return (
    <CartWrapper cartShow={false} currencySign="$" continueToCheckout={continueToCheckout}>
      <div>
        {products.map((product, index) =>
          <React.Fragment key={index}>
            <div>
              <b>{product.name}</b>
              <p>{product.price}</p>
              <CartButton
                product={{
                  name: product.name,
                  id: product.id,
                  price: product.price,
                  description: product.description,
                  quantity: 1,
                  image: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                }}
              />
            </div>
            <hr />
          </React.Fragment>
        )}
      </div>
      <CartListing />
    </CartWrapper>
  );
}

export default App;
