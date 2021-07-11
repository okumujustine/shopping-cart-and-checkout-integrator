# Shopping cart integrator
<p>Easy integration of shopping cart into React JS applications.</p>
<b>NB: still at initial stages of development, You can test it out  🤓 .</b>

### Installation
```
 npm i reacteasycart --save
```
### Setup

```
import { CartWrapper, CartButton, CartListing } from "reacteasycart"

```

#### Example

<p>NB: make sure the application is wrapped up with the <b>CartWrapper</b> component</p>

```
import React from "react";
import { CartWrapper, CartButton, CartListing } from "reacteasycart"

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
    { id: 1, name: 'yogurt', price: 6000, description: "amazing product for cooking faster" },
    { id: 2, name: 'milk', price: 12000, description: "amazing product for cooking faster" },
  ]

  const continueToCheckout = (checkoutDetails) => {
    console.log(checkoutDetails)
  }

  return (
    <CartWrapper>

    <div style={{ ...containerStyles }}>
      <div style={{ ...productButtonStyles }}>
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
                  quantity: 1
                }}
              />
            </div>
            <hr />
          </React.Fragment>
        )}
      </div>

      <CartListing continueToCheckout={continueToCheckout} currencySign="$" />
    </div>

     </CartWrapper>
  );
}

export default App;


```

