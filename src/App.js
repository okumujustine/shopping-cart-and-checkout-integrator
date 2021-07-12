import React from "react";
import { CartButton, CartListing } from "./components/index"

function App() {

  const containerStyles =
  {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px"
  }

  const productButtonStyles =
  {
    width: '10%',
    marginRight: "50px"
  }


  const products = [
    { id: 1, name: 'Stove', price: 6000, description: "Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster Amazing product for cooking faster" },
    { id: 2, name: 'Cooker', price: 12000, description: "Amazing product for cooking faster" },
  ]

  const continueToCheckout = (checkoutDetails) => {
    alert("checkoutDetails", checkoutDetails)
  }

  return (
    <div style={{ ...containerStyles }}>
      <div style={{ ...productButtonStyles }}>
        {products.map((product, index) =>
          <React.Fragment key={index}>
            <div>
              <b>{product.name}</b>
              <p>{product.price}</p>
              <CartButton
                isIncrementAndDecrementBtn={false}
                buttonStyle={{
                  addToCart: { backgroundColor: '#00b0ff' },
                  increment: { backgroundColor: 'purple' },
                  decrement: { backgroundColor: 'green' }
                }}
                buttonClass={{
                  addToCart: "bg__bg_Red",
                  increment: "bg__bg_Red",
                  decrement: "bg__bg_Red"
                }}
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
      <CartListing
        cartDetailsBtnClass={{ increment: "int_acc" }}
        isDescription={true}
        description="items"
        isCartLogo={true}
        continueToCheckout={continueToCheckout}
        currencySign="$"
      />

    </div>
  );
}

export default App;
