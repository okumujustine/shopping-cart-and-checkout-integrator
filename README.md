# Shopping cart integrator
<p>Easy integration of shopping cart into React JS applications.</p>
<b>NB: still at initial stages of development, You can test it out  🤓 .</b>

### Installation
```
 npm i react-easy-cart --save
```
# Simple setup

```jsx
import { CartButton, CartWrapper } from "./components/index"
```

```jsx
import React from "react";
import { CartButton, CartWrapper } from "./components/index"

function App() {

  const products = [
    { id: 1, name: 'Stove', price: 6000, description: "Amazing product for cooking faster" },
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
    </CartWrapper>
  );
}

export default App;
```

# More custom usage
### Setup

```jsx
import { CartWrapper, CartButton, CartListing } from "react-easy-cart"

```

#### Example

<p>NB: make sure the application is wrapped up with the <b>CartWrapper</b> component</p>
<p>NB: CartWrapper cartShow prop must be set to false <b>e.g cartShow={false}</b> </p>

```jsx
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
    <CartWrapper cartShow={false}>

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

### Imports.
<table>
  <tr>
    <th>Components</th>
    <th>Details</th>
    <th>Pros</th>
  </tr>
  <tr>
    <td>CartButton</td>
      <td>
      integrated as the product button
    </td>
    <td>
      isIncrementAndDecrementBtn,
      buttonStyle,
      buttonClass,
      product
    </td>
  </tr>
  <tr>
    <td>CartListing</td>
    <td>Contains the cart content</td>
    <td>
        cartDetailsBtnClass,
        isDescription,
        description,
        isCartLogo,
        continueToCheckout,
        currencySign,
    </td>
  </tr>
  <tr>
    <td>TotalItemsInCart</td>
    <td>
    Independently imports total  number of items in the cart
    </td>
    <td>isCartLogo </td>
  </tr>
</table>

### Customization
<p>Adding custom styles and classes</p>
<p><b>1. CartButton</b></p>
  i) Use <b>buttonStyle</b> and <b>buttonClass</b>  props and specify the target button to add custom styles and classes respectively

Example:
  ```jsx
    <CartButton
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
  ```

  ii) To disable the decrement and increment buttons on the CartButton use <b>isIncrementAndDecrementBtn</b> prop

  ```jsx
    <CartButton
      isIncrementAndDecrementBtn={false}
  ```

<p><b>1. CartListing</b></p>
  i) Use <b>cartDetailsBtnClass</b>  props and specify the target button to add custom classes

  ```jsx
    <CartListing
        cartDetailsBtnClass={{ increment: "int_acc" 
        }}
        isCartLogo={false}
```

ii) Cart logo show/hide

  ```jsx
    <CartListing
        isCartLogo={false}
```

